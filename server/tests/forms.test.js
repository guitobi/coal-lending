import test from "node:test";
import assert from "node:assert/strict";
import { orderSchema } from "../src/schemas/order.schema.js";
import { problemSchema } from "../src/schemas/problem.schema.js";
import { getEmailLocale, renderOrderManagerEmail, renderOrderCustomerEmail } from "../src/emails/templates.js";
import { transporter } from "../src/config/mailer.js";
import { createOrder } from "../src/controllers/order.controller.js";
import { createProblem } from "../src/controllers/problem.controller.js";

function response() {
  return {
    statusCode: 200,
    body: undefined,
    status(code) { this.statusCode = code; return this; },
    json(data) { this.body = data; return this; },
  };
}

const order = {
  name: "Jan Kowalski", email: "jan@example.com", phoneNumber: "+48123456789",
  city: "Warsaw", weightInKg: 500, lang: "pl",
};

test("order and contact schemas preserve a validated language", () => {
  assert.equal(orderSchema.parse(order).lang, "pl");
  assert.equal(orderSchema.parse({ ...order, lang: "pl-PL" }).lang, "pl-PL");
  assert.equal(problemSchema.parse({
    email: "jan@example.com", subject: "Delivery",
    message: "When will my delivery arrive?", lang: "pl",
  }).lang, "pl");
  assert.equal(getEmailLocale("pl-PL"), "pl");
  assert.equal(orderSchema.safeParse({ ...order, lang: "<script>" }).success, false);
});

test("pellet inquiries accept whole 15 kg bags and use the pellet price, without changing charcoal", () => {
  const pellet = { ...order, productType: "pellet", quantityBags: 65, weightInKg: 975 };
  const parsed = orderSchema.parse(pellet);
  assert.equal(parsed.productType, "pellet");
  assert.equal(orderSchema.safeParse({ ...pellet, weightInKg: 976 }).success, false);
  assert.equal(orderSchema.safeParse({ ...pellet, quantityBags: 0, weightInKg: 0 }).success, false);
  assert.equal(orderSchema.safeParse({ ...order, weightInKg: 15 }).success, false);
  const manager = renderOrderManagerEmail("pl", parsed);
  assert.match(manager.subject, /pellet sosnowy/i);
  assert.match(manager.html, /65/);
  assert.match(manager.html, /409\.50/);
  const customer = renderOrderCustomerEmail("en", parsed);
  assert.match(customer.html, /€420\/t/);
  assert.match(renderOrderManagerEmail("pl", orderSchema.parse(order)).subject, /węgiel drzewny/);
});

test("order stays successful if only the customer confirmation fails", async (t) => {
  const original = transporter.sendMail;
  const emails = [];
  transporter.sendMail = async (message) => {
    emails.push(message);
    if (emails.length === 2) throw new Error("simulated confirmation failure");
  };
  t.after(() => { transporter.sendMail = original; });

  const res = response();
  await createOrder({ body: orderSchema.parse(order) }, res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(emails.length, 2);
  assert.match(emails[0].subject, /Nowe zamówienie/);
  assert.match(emails[1].subject, /Potwierdzenie/);
});

test("contact stays successful if only the customer confirmation fails", async (t) => {
  const original = transporter.sendMail;
  const emails = [];
  transporter.sendMail = async (message) => {
    emails.push(message);
    if (emails.length === 2) throw new Error("simulated confirmation failure");
  };
  t.after(() => { transporter.sendMail = original; });

  const res = response();
  await createProblem({ body: problemSchema.parse({
    name: "Jan", email: "jan@example.com", subject: "Delivery",
    message: "When will my delivery arrive?", lang: "pl",
  }) }, res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.match(emails[0].subject, /Nowa wiadomość/);
});

test("manager delivery failures correctly report an unsuccessful order", async (t) => {
  const original = transporter.sendMail;
  transporter.sendMail = async () => { throw new Error("service unavailable"); };
  t.after(() => { transporter.sendMail = original; });

  const res = response();
  await createOrder({ body: orderSchema.parse(order) }, res);
  assert.equal(res.statusCode, 500);
  assert.equal(res.body.success, false);
});

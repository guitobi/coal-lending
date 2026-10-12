import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import handler from "serve-handler";

const directory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const server = http.createServer((request, response) => handler(request, response, {
  public: directory,
  rewrites: [{ source: "**", destination: "/index.html" }],
}));
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

let browser;
try {
  const site = `http://127.0.0.1:${server.address().port}`;
  browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setBypassServiceWorker(true);
  await page.setRequestInterception(true);
  page.on("request", (request) => request.url().startsWith(site) ? request.continue() : request.abort());
  const selector = ".fixed.bottom-0.left-0.right-0 button";

  await page.goto(site, { waitUntil: "networkidle0" });
  await page.waitForSelector(selector);
  assert.equal(await page.evaluate(() => Boolean(
    document.querySelector('script[src*="googletagmanager.com/gtag/js"]')
  )), false, "Google Analytics must not load before consent");

  await page.evaluate((query) => document.querySelector(query).click(), selector);
  const necessary = await page.evaluate(() => JSON.parse(localStorage.getItem("gdpr_consent")));
  assert.equal(necessary.analytics, false, "necessary-only consent should disable analytics");
  assert.equal(await page.evaluate(() => Boolean(
    document.querySelector('script[src*="googletagmanager.com/gtag/js"]')
  )), false, "Google Analytics must not load after declining analytics");

  await page.evaluate(() => localStorage.removeItem("gdpr_consent"));
  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector(selector);
  await page.evaluate((query) => {
    const buttons = document.querySelectorAll(query);
    buttons[buttons.length - 1].click();
  }, selector);
  const all = await page.evaluate(() => JSON.parse(localStorage.getItem("gdpr_consent")));
  assert.equal(all.analytics, true, "accept-all consent should enable analytics");

  console.log("Consent smoke test passed: no pre-consent GA, necessary-only stays disabled, accept-all persists.");
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

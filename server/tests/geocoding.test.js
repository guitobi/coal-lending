import test from "node:test";
import assert from "node:assert/strict";
import { geocodeSearch, geocodeReverse } from "../src/controllers/geocoding.controller.js";

function response() {
  return {
    statusCode: 200,
    body: undefined,
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
}

test("geocoding rejects invalid queries without calling upstream", async () => {
  for (const query of [{}, { q: "x" }, { q: "a".repeat(151) }]) {
    const res = response();
    await geocodeSearch({ query }, res);
    assert.equal(res.statusCode, 400);
  }
  for (const query of [{}, { lat: "91", lon: "12" }, { lat: "12", lon: "181" },
    { lat: "nan", lon: "12" }]) {
    const res = response();
    await geocodeReverse({ query }, res);
    assert.equal(res.statusCode, 400);
  }
});

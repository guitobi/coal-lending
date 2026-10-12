import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { heatmapSchema } from "../src/schemas/heatmap.schema.js";

function response() {
  return {
    statusCode: 200,
    body: undefined,
    status(code) { this.statusCode = code; return this; },
    json(data) { this.body = data; return this; },
  };
}

test("heatmap concurrent writes are serialized, do not leak values and can be cleared", async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), "vanshare-heatmap-"));
  const previous = process.cwd();
  process.chdir(temp);
  try {
    const { storeHeatmapData, getHeatmapData, clearHeatmapData } =
      await import("../src/controllers/heatmap.controller.js");

    const results = await Promise.all(Array.from({ length: 25 }, async (_, index) => {
      const body = heatmapSchema.parse({
        type: "form-change", fieldName: "email", value: "secret-email@example.com",
        url: `https://vanshare.pl/order?secret=${index}`, timestamp: Date.now(),
      });
      const res = response();
      await storeHeatmapData({
        body, path: "/heatmap/form-change",
        ip: "192.0.2.1", headers: { "user-agent": "Test Browser" },
      }, res);
      return res;
    }));
    assert.ok(results.every((res) => res.statusCode === 200));

    const stored = JSON.parse(await fs.readFile(
      path.join(temp, "data", "heatmap", "heatmap-data.json"), "utf8",
    ));
    assert.equal(stored.length, 25);
    assert.equal(new Set(stored.map((item) => item.id)).size, 25);
    assert.ok(stored.every((item) =>
      item.url === "https://vanshare.pl/order" && !("value" in item) && !("ipHash" in item)
    ));

    const getRes = response();
    await getHeatmapData({ query: { limit: "100", offset: "0" } }, getRes);
    assert.equal(getRes.body.total, 25);

    const clearRes = response();
    await clearHeatmapData({}, clearRes);
    assert.equal(clearRes.body.success, true);
    assert.deepEqual(JSON.parse(await fs.readFile(
      path.join(temp, "data", "heatmap", "heatmap-data.json"), "utf8",
    )), []);
  } finally {
    process.chdir(previous);
    await fs.rm(temp, { recursive: true, force: true });
  }
});

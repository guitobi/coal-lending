import test from "node:test";
import assert from "node:assert/strict";
import express from "express";
import apiRoutes from "../src/routes/api.routes.js";

test("pellet capability advertises the new order contract", async () => {
  const app = express();
  app.use("/api", apiRoutes);
  const server = app.listen(0, "127.0.0.1");
  try {
    await new Promise((resolve) => server.once("listening", resolve));
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/capabilities`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      products: ["charcoal", "pellet"],
      pelletOrderVersion: 1,
    });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

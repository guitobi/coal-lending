import assert from "node:assert/strict";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import handler from "serve-handler";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const server = http.createServer((req, res) =>
  handler(req, res, { public: dist, rewrites: [{ source: "**", destination: "/index.html" }] }),
);
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setBypassServiceWorker(true);
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.url().includes("/api/capabilities")) {
      return request.respond({
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ products: ["charcoal", "pellet"], pelletOrderVersion: 1 }),
      });
    }
    return request.url().startsWith(base) ? request.continue() : request.abort();
  });
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle0" });
  await page.evaluate(() =>
    localStorage.setItem("gdpr_consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }))
  );
  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector("#products article");

  const home = await page.evaluate(() => {
    const cards = [...document.querySelectorAll("#products article")];
    return {
      cards: cards.length,
      links: cards.map((card) => card.querySelector("a")?.getAttribute("href")),
      images: cards.map((card) => new URL(card.querySelector("img").src).pathname),
      productsBeforePackages:
        document.querySelector("#products").getBoundingClientRect().top <
        document.querySelector("#packages").getBoundingClientRect().top,
    };
  });
  assert.equal(home.cards, 2);
  assert.deepEqual(home.links, ["/order", "/pellet"]);
  assert.equal(new Set(home.images).size, 2);
  assert.equal(home.productsBeforePackages, true);

  const breakpoints = [320, 360, 390, 428, 768, 1024, 1440];
  for (const width of breakpoints) {
    await page.setViewport({ width, height: 900 });
    const layout = await page.evaluate(() => {
      const cards = [...document.querySelectorAll("#products article")];
      return {
        scrollWidth: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
        offenders: [...document.querySelectorAll("body *")].filter((el) => {
          const rect = el.getBoundingClientRect();
          const css = getComputedStyle(el);
          return css.display !== "none" && css.visibility !== "hidden" &&
            rect.width > 0 && (rect.right > document.documentElement.clientWidth + 2 || rect.left < -2);
        }).slice(0, 8).map((el) => ({
          tag: el.tagName,
          className: typeof el.className === "string" ? el.className.slice(0, 120) : "",
          left: Math.round(el.getBoundingClientRect().left),
          right: Math.round(el.getBoundingClientRect().right),
        })),
        cardBounds: cards.map((card) => {
          const b = card.getBoundingClientRect();
          return { left: b.left, right: b.right, top: b.top, width: b.width };
        }),
      };
    });
    assert.ok(layout.scrollWidth <= layout.viewport + 2, `Homepage overflow at ${width}: ${JSON.stringify(layout)}`);
    assert.ok(layout.cardBounds.every((b) => b.left >= -1 && b.right <= layout.viewport + 1),
      `Product cards overflow at ${width}: ${JSON.stringify(layout)}`);
    if (width < 768) assert.ok(layout.cardBounds[1].top > layout.cardBounds[0].top + 50, "Mobile cards must stack");
    if (width >= 768) assert.ok(Math.abs(layout.cardBounds[1].top - layout.cardBounds[0].top) < 2,
      "Desktop cards must align in one row");
  }

  await page.setViewport({ width: 390, height: 844 });
  await page.goto(base + "/pellet?lng=pl", { waitUntil: "networkidle0" });
  await page.waitForSelector("#pellet-order #quantityBags");

  const pellet = await page.evaluate(() => [
    ...document.querySelectorAll('article img[src*="/pellet/"]'),
  ].map((img) => new URL(img.src).pathname));
  assert.equal(pellet.length, 4, "Pellet detail should display one hero and three gallery images");
  assert.equal(new Set(pellet).size, pellet.length, "Pellet photos must not repeat on detail page");
  assert.equal(pellet.includes(home.images[1]), false, "Homepage pellet photo must be different");
  assert.equal(new Set([...pellet, home.images[1]]).size, 5);

  for (const width of breakpoints) {
    await page.setViewport({ width, height: 900 });
    const layout = await page.evaluate(() => {
      const article = document.querySelector("article");
      const gallery = [...article.querySelectorAll('img[src*="/pellet/"]')];
      return {
        scrollWidth: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
        pictures: gallery.map((img) => {
          const b = img.getBoundingClientRect();
          return { left: b.left, right: b.right, width: b.width };
        }),
      };
    });
    assert.ok(layout.scrollWidth <= layout.viewport + 2, `Pellet overflow at ${width}: ${JSON.stringify(layout)}`);
    assert.ok(layout.pictures.every((b) => b.left >= -1 && b.right <= layout.viewport + 1),
      `Pellet images overflow at ${width}: ${JSON.stringify(layout)}`);
  }

  console.log("Responsive layout passed: 320, 360, 390, 428, 768, 1024, 1440px.");
  console.log("Photo allocation passed: 5 unique pellet photos, 0 repeated between home and detail.");
  console.log("Product hierarchy passed: paired product cards before charcoal packages.");
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

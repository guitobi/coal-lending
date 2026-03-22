import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, writeFile } from "node:fs/promises";

import handler from "serve-handler";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const routes = [
  "/",
  "/about",
  "/delivery",
  "/calculator",
  "/order",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/legal-notice",
];

const port = 4173;

function toOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  const trimmed = routePath.replace(/^\//, "");
  return path.join(distDir, trimmed, "index.html");
}

async function prerender() {
  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: distDir,
      rewrites: [{ source: "**", destination: "/index.html" }],
    }),
  );

  await new Promise((resolve) => server.listen(port, resolve));
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    for (const routePath of routes) {
      const targetUrl = `http://127.0.0.1:${port}${routePath}`;
      await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForSelector("body", { timeout: 15000 });

      const html = await page.content();
      const outFile = toOutputPath(routePath);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf8");
      console.log(
        `Prerendered ${routePath} -> ${path.relative(distDir, outFile)}`,
      );
    }
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
}

function canSkipPrerender(error) {
  const message = String(error?.message || "");
  const vercelBuild = process.env.VERCEL === "1" || process.env.VERCEL_ENV;

  const missingChromeLib =
    message.includes("Failed to launch the browser process") ||
    message.includes("error while loading shared libraries") ||
    message.includes("libnspr4.so");

  return Boolean(vercelBuild && missingChromeLib);
}

prerender().catch((error) => {
  if (canSkipPrerender(error)) {
    console.warn(
      "Prerender skipped: Chromium runtime libs are unavailable in this build environment.",
    );
    console.warn("Deploy will continue with SPA fallback rendering.");
    process.exit(0);
  }

  console.error("Prerender failed", error);
  process.exit(1);
});

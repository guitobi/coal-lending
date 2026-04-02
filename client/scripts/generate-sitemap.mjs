import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SITE_URL, SITE_NAME } from "../src/utils/siteConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

// Define all routes for the sitemap
const routes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/delivery", priority: 0.8, changefreq: "monthly" },
  { path: "/calculator", priority: 0.7, changefreq: "monthly" },
  { path: "/order", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/faq", priority: 0.8, changefreq: "monthly" },
  { path: "/comparison", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.4, changefreq: "yearly" },
  { path: "/terms-of-service", priority: 0.4, changefreq: "yearly" },
  { path: "/cookie-policy", priority: 0.4, changefreq: "yearly" },
  { path: "/legal-notice", priority: 0.4, changefreq: "yearly" },
];

// Function to generate sitemap XML
function generateSitemapXml(routes, baseUrl) {
  const now = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:lang="http://www.w3.org/XML/1998/namespace">
`;

  routes.forEach((route) => {
    xml += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" xmlns:xhtml="http://www.w3.org/1999/xhtml"/>
    <xhtml:link rel="alternate" hreflang="pl" href="${baseUrl}${route.path}?lang=pl" xmlns:xhtml="http://www.w3.org/1999/xhtml"/>
  </url>
`;
  });

  xml += "</urlset>";

  return xml;
}

async function generateSitemap() {
  try {
    // Generate sitemap XML
    const sitemapXml = generateSitemapXml(
      routes,
      SITE_URL || "https://vanshare.pl",
    );

    // Write sitemap to dist directory
    const sitemapPath = path.join(distDir, "sitemap.xml");
    await writeFile(sitemapPath, sitemapXml, "utf8");

    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
    console.log(`📊 Generated sitemap with ${routes.length} URLs`);

    return sitemapPath;
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    throw error;
  }
}

// Run the sitemap generator if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap().catch((error) => {
    console.error("Sitemap generation failed:", error);
    process.exit(1);
  });
}

export { generateSitemap, generateSitemapXml };

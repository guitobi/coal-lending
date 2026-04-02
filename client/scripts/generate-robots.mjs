import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SITE_URL } from "../src/utils/siteConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

// Function to generate robots.txt content
function generateRobotsTxt(baseUrl) {
  const sitemapUrl = `${baseUrl}/sitemap.xml`;

  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${sitemapUrl}

# Host directive (for search engines that support it)
Host: ${baseUrl}

# Disallow private or admin areas if any
Disallow: /admin/
Disallow: /private/

# Language versions
Link: ${baseUrl}/ ; rel="alternate"; hreflang="en"
Link: ${baseUrl}/ ; rel="alternate"; hreflang="pl"
Link: ${baseUrl}/?lang=en ; rel="alternate"; hreflang="en"
Link: ${baseUrl}/?lang=pl ; rel="alternate"; hreflang="pl"

# End of robots.txt`;

  return robotsContent;
}

async function generateRobots() {
  try {
    // Generate robots.txt content
    const robotsTxt = generateRobotsTxt(SITE_URL || "https://vanshare.pl");

    // Write robots.txt to dist directory
    const robotsPath = path.join(distDir, "robots.txt");
    await writeFile(robotsPath, robotsTxt, "utf8");

    console.log(`✅ Robots.txt generated successfully at ${robotsPath}`);

    return robotsPath;
  } catch (error) {
    console.error("❌ Error generating robots.txt:", error);
    throw error;
  }
}

// Run the robots.txt generator if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateRobots().catch((error) => {
    console.error("Robots.txt generation failed:", error);
    process.exit(1);
  });
}

export { generateRobots, generateRobotsTxt };

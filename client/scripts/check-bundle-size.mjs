import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define performance budgets (in KB)
const PERFORMANCE_BUDGETS = {
  "total-size": 2048, // Total bundle size should be under 2MB
  "vendor-size": 1024, // Vendor bundle should be under 1MB
  "main-size": 512, // Main bundle should be under 512KB
  "css-size": 100, // CSS should be under 100KB
};

function getBundleSize(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File does not exist: ${filePath}`);
    return 0;
  }

  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024); // Convert to KB
}

function analyzeBundleSizes(distDir) {
  const files = fs.readdirSync(distDir);

  let totalSize = 0;
  let vendorSize = 0;
  let mainSize = 0;
  let cssSize = 0;

  files.forEach((file) => {
    const filePath = path.join(distDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively check subdirectories
      const subDirSize = analyzeBundleSizes(filePath);
      totalSize += subDirSize.total;
      vendorSize += subDirSize.vendor;
      mainSize += subDirSize.main;
      cssSize += subDirSize.css;
    } else if (file.endsWith(".js")) {
      const size = getBundleSize(filePath);
      totalSize += size;

      if (file.includes("vendor")) {
        vendorSize += size;
      } else if (file.includes("index") || file.includes("main")) {
        mainSize += size;
      }
    } else if (file.endsWith(".css")) {
      const size = getBundleSize(filePath);
      totalSize += size;
      cssSize += size;
    }
  });

  return { total: totalSize, vendor: vendorSize, main: mainSize, css: cssSize };
}

function checkPerformanceBudgets(sizes) {
  const results = [];

  Object.entries(PERFORMANCE_BUDGETS).forEach(([budgetType, maxSize]) => {
    let actualSize;

    switch (budgetType) {
      case "total-size":
        actualSize = sizes.total;
        break;
      case "vendor-size":
        actualSize = sizes.vendor;
        break;
      case "main-size":
        actualSize = sizes.main;
        break;
      case "css-size":
        actualSize = sizes.css;
        break;
      default:
        return;
    }

    const passed = actualSize <= maxSize;
    results.push({
      type: budgetType,
      actual: actualSize,
      max: maxSize,
      passed,
    });

    console.log(
      `${passed ? "✅" : "❌"} ${budgetType}: ${actualSize}KB / ${maxSize}KB`,
    );
  });

  return results;
}

async function main() {
  const distDir = path.resolve(__dirname, "../dist");

  if (!fs.existsSync(distDir)) {
    console.error('Build directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  console.log("🔍 Analyzing bundle sizes...\n");

  const sizes = analyzeBundleSizes(distDir);
  const results = checkPerformanceBudgets(sizes);

  const failedChecks = results.filter((result) => !result.passed).length;

  console.log(`\n📊 Summary:`);
  console.log(`Total bundle size: ${sizes.total}KB`);
  console.log(`Vendor bundle size: ${sizes.vendor}KB`);
  console.log(`Main bundle size: ${sizes.main}KB`);
  console.log(`CSS size: ${sizes.css}KB`);

  if (failedChecks > 0) {
    console.log(
      `\n🚨 ${failedChecks} performance budget${failedChecks > 1 ? "s" : ""} exceeded!`,
    );
    process.exit(1);
  } else {
    console.log("\n🎉 All performance budgets met!");
  }
}

main().catch((err) => {
  console.error("Error analyzing bundle sizes:", err);
  process.exit(1);
});

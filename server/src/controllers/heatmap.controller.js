import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import logger from "../config/logger.js";

// Define the data directory for storing heatmap data
// In production (Fly.io), use mounted volume at /data
// In development, use local data directory
const HEATMAP_DATA_DIR = process.env.NODE_ENV === "production"
  ? "/data/heatmap"
  : path.join(process.cwd(), "data", "heatmap");
const HEATMAP_FILE_PATH = path.join(HEATMAP_DATA_DIR, "heatmap-data.json");

// Helper function to anonymize IP address
const anonymizeIP = (ip) => {
  if (!ip) return "unknown";

  // Hash the IP for privacy
  const hash = crypto.createHash("sha256").update(ip).digest("hex");
  return hash.substring(0, 16); // First 16 chars of hash
};

// Helper function to extract basic user agent info
const sanitizeUserAgent = (userAgent) => {
  if (!userAgent) return "unknown";

  // Extract only browser and OS info, not full UA string
  const browserMatch = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)\/[\d.]+/);
  const osMatch = userAgent.match(/(Windows|Mac|Linux|Android|iOS)/);

  return {
    browser: browserMatch ? browserMatch[0] : "unknown",
    os: osMatch ? osMatch[0] : "unknown",
  };
};

const inferHeatmapTypeFromPath = (requestPath = "") => {
  const normalizedPath = requestPath.split("?")[0];
  const typeSegment = normalizedPath.split("/").filter(Boolean).pop();
  if (!typeSegment || typeSegment === "heatmap") {
    return null;
  }
  return typeSegment;
};

const normalizeHeatmapBody = (body) => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  if (typeof body === "object") {
    return body;
  }

  return {};
};

// Ensure the heatmap data directory exists
try {
  await fs.mkdir(HEATMAP_DATA_DIR, { recursive: true });
} catch (error) {
  logger.error("Error creating heatmap data directory", { error: error.message });
}

// Helper function to read heatmap data from file
const readHeatmapData = async () => {
  try {
    const data = await fs.readFile(HEATMAP_FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    if (error.code === "ENOENT") {
      return [];
    }
    logger.error("Error reading heatmap data", { error: error.message });
    return [];
  }
};

// Helper function to write heatmap data to file
const writeHeatmapData = async (data) => {
  try {
    await fs.writeFile(HEATMAP_FILE_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    logger.error("Error writing heatmap data", { error: error.message });
  }
};

// Store heatmap data (clicks, scrolls, mouse movements, etc.)
export const storeHeatmapData = async (req, res) => {
  try {
    // Data is already validated by the validate middleware
    const parsedBody = normalizeHeatmapBody(req.body);
    const inferredType = inferHeatmapTypeFromPath(req.path);
    const { type: bodyType, ...payload } = parsedBody;
    const type = bodyType || inferredType;

    if (!type) {
      return res.status(400).json({ error: "Type is required" });
    }

    // Anonymize sensitive data
    const heatmapEntry = {
      id: Date.now().toString(),
      type,
      ...payload,
      timestamp: payload.timestamp || Date.now(),
      userAgent: sanitizeUserAgent(req.headers["user-agent"]),
      ipHash: anonymizeIP(req.ip), // Store hash instead of real IP
    };

    // Read existing data
    const existingData = await readHeatmapData();

    // Limit file size: keep only last 10000 entries
    const MAX_ENTRIES = 10000;
    const trimmedData = existingData.slice(-MAX_ENTRIES + 1);

    // Add new entry
    const updatedData = [...trimmedData, heatmapEntry];

    // Write updated data back to file
    await writeHeatmapData(updatedData);

    res.status(200).json({ success: true, id: heatmapEntry.id });
  } catch (error) {
    logger.error("Error storing heatmap data", { error: error.message, stack: error.stack });
    res.status(500).json({ error: "Failed to store heatmap data" });
  }
};

// Get heatmap data (for analytics dashboard or processing)
// Protected with admin auth middleware
export const getHeatmapData = async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const limitNum = Math.min(parseInt(limit) || 100, 1000); // Max 1000
    const offsetNum = parseInt(offset) || 0;

    const heatmapData = await readHeatmapData();

    // Paginate results
    const paginatedData = heatmapData.slice(offsetNum, offsetNum + limitNum);

    res.status(200).json({
      data: paginatedData,
      total: heatmapData.length,
      limit: limitNum,
      offset: offsetNum,
    });
  } catch (error) {
    logger.error("Error retrieving heatmap data", { error: error.message, stack: error.stack });
    res.status(500).json({ error: "Failed to retrieve heatmap data" });
  }
};

// Get heatmap data by type
// Protected with admin auth middleware
export const getHeatmapDataByType = async (req, res) => {
  try {
    const { type } = req.params;
    const { limit = 100, offset = 0 } = req.query;
    const limitNum = Math.min(parseInt(limit) || 100, 1000);
    const offsetNum = parseInt(offset) || 0;

    const heatmapData = await readHeatmapData();
    const filteredData = heatmapData.filter((entry) => entry.type === type);

    // Paginate results
    const paginatedData = filteredData.slice(offsetNum, offsetNum + limitNum);

    res.status(200).json({
      data: paginatedData,
      total: filteredData.length,
      limit: limitNum,
      offset: offsetNum,
    });
  } catch (error) {
    logger.error("Error retrieving heatmap data by type", { error: error.message, stack: error.stack });
    res.status(500).json({ error: "Failed to retrieve heatmap data" });
  }
};

// Clear heatmap data (admin function)
// Protected with admin auth middleware
export const clearHeatmapData = async (req, res) => {
  try {
    await writeHeatmapData([]);
    logger.info("Heatmap data cleared by admin");
    res.status(200).json({ success: true, message: "Heatmap data cleared" });
  } catch (error) {
    logger.error("Error clearing heatmap data", { error: error.message, stack: error.stack });
    res.status(500).json({ error: "Failed to clear heatmap data" });
  }
};

import fs from "fs/promises";
import path from "path";

// Define the data directory for storing heatmap data
const HEATMAP_DATA_DIR = path.join(process.cwd(), "data", "heatmap");
const HEATMAP_FILE_PATH = path.join(HEATMAP_DATA_DIR, "heatmap-data.json");

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
  console.error("Error creating heatmap data directory:", error);
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
    console.error("Error reading heatmap data:", error);
    return [];
  }
};

// Helper function to write heatmap data to file
const writeHeatmapData = async (data) => {
  try {
    await fs.writeFile(HEATMAP_FILE_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing heatmap data:", error);
  }
};

// Store heatmap data (clicks, scrolls, mouse movements, etc.)
export const storeHeatmapData = async (req, res) => {
  try {
    const parsedBody = normalizeHeatmapBody(req.body);
    const inferredType = inferHeatmapTypeFromPath(req.path);
    const { type: bodyType, ...payload } = parsedBody;
    const type = bodyType || inferredType;

    // Validate required fields based on type
    if (!type) {
      return res.status(400).json({ error: "Type is required" });
    }

    // Add timestamp if not provided
    const heatmapEntry = {
      id: Date.now().toString(),
      type,
      ...payload,
      timestamp: payload.timestamp || Date.now(),
      userAgent: req.headers["user-agent"],
      ip: req.ip,
    };

    // Read existing data
    const existingData = await readHeatmapData();

    // Add new entry
    const updatedData = [...existingData, heatmapEntry];

    // Write updated data back to file
    await writeHeatmapData(updatedData);

    res.status(200).json({ success: true, id: heatmapEntry.id });
  } catch (error) {
    console.error("Error storing heatmap data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get heatmap data (for analytics dashboard or processing)
export const getHeatmapData = async (req, res) => {
  try {
    const heatmapData = await readHeatmapData();
    res.status(200).json({ data: heatmapData });
  } catch (error) {
    console.error("Error retrieving heatmap data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get heatmap data by type
export const getHeatmapDataByType = async (req, res) => {
  try {
    const { type } = req.params;
    const heatmapData = await readHeatmapData();
    const filteredData = heatmapData.filter((entry) => entry.type === type);

    res.status(200).json({ data: filteredData });
  } catch (error) {
    console.error("Error retrieving heatmap data by type:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Clear heatmap data (admin function)
export const clearHeatmapData = async (req, res) => {
  try {
    await writeHeatmapData([]);
    res.status(200).json({ success: true, message: "Heatmap data cleared" });
  } catch (error) {
    console.error("Error clearing heatmap data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

import logger from "../config/logger.js";

// Public Nominatim allows no more than one request per second per application.
// Only validated, cached lookups reach it. Replace with a paid provider if the
// site's usage exceeds the public service's limits.
const NOMINATIM_URL = "https://nominatim.openstreetmap.org";
const cache = new Map();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const CACHE_LIMIT = 200;
let nextAllowedAt = 0;
let pending = 0;
let queue = Promise.resolve();

async function lookup(endpoint, params) {
  const key = `${endpoint}?${params.toString()}`;
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) return cached.value;
  if (pending >= 20) {
    const error = new Error("Geocoding service is busy");
    error.status = 429;
    throw error;
  }

  pending++;
  const job = queue.then(async () => {
    // Check again after waiting: another request may have populated the cache.
    const latest = cache.get(key);
    if (latest && latest.expires > Date.now()) return latest.value;

    await new Promise((resolve) => setTimeout(resolve, Math.max(0, nextAllowedAt - Date.now())));
    nextAllowedAt = Date.now() + 1100;

    const response = await fetch(`${NOMINATIM_URL}/${endpoint}?${params}`, {
      headers: {
        "User-Agent": "VAN-SHARE/1.0 (https://vanshare.pl; vanshare1@gmail.com)",
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Geocoding upstream returned ${response.status}`);

    const value = await response.json();
    if (cache.size >= CACHE_LIMIT) cache.delete(cache.keys().next().value);
    cache.set(key, { value, expires: Date.now() + CACHE_TTL_MS });
    return value;
  });
  queue = job.catch(() => {});
  try {
    return await job;
  } finally {
    pending--;
  }
}

async function respond(req, res, endpoint, params) {
  try {
    return res.json(await lookup(endpoint, params));
  } catch (error) {
    logger.warn("Geocoding request failed", { error: error.message });
    return res.status(error.status || 502).json({ error: "Geocoding unavailable" });
  }
}

export function geocodeSearch(req, res) {
  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
  if (q.length < 3 || q.length > 150) {
    return res.status(400).json({ error: "Invalid address" });
  }
  return respond(req, res, "search", new URLSearchParams({
    q, format: "json", limit: "1", addressdetails: "0",
  }));
}

export function geocodeReverse(req, res) {
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);
  if (!Number.isFinite(lat) || Math.abs(lat) > 90 ||
      !Number.isFinite(lon) || Math.abs(lon) > 180 ||
      req.query.lat === undefined || req.query.lon === undefined) {
    return res.status(400).json({ error: "Invalid coordinates" });
  }
  return respond(req, res, "reverse", new URLSearchParams({
    lat: String(lat), lon: String(lon), format: "json",
  }));
}
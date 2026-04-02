import express from "express";
import cors from "cors";
import compression from "compression";
import "dotenv/config";
import apiRoutes from "./routes/api.routes.js";

const app = express();

app.use(compression());

const configuredOrigins = [
  ...(process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:4173",
].filter(Boolean);

const allowedOrigins = [...new Set(configuredOrigins)];
const allowAllOrigins = allowedOrigins.length === 0;

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowAllOrigins || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.text({ type: "text/plain" }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Cache-Control middleware for API routes
app.use((req, res, next) => {
  if (req.method === "GET") {
    // Cache GET requests for 5 minutes by default if they are not the heatmap/health ones
    if (!req.path.includes("heatmap") && !req.path.includes("health")) {
      res.setHeader("Cache-Control", "public, max-age=300");
    }
  } else {
    // Prevent caching for POST/DELETE/etc
    res.setHeader("Cache-Control", "no-store");
  }
  next();
});

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

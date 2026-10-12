import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import "dotenv/config";
import apiRoutes from "./routes/api.routes.js";
import { generalLimiter } from "./middleware/rateLimiter.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import logger from "./config/logger.js";

const app = express();

// Fly.io terminates TLS at one trusted proxy hop. Do not trust client-supplied
// forwarding headers when running the server directly in development.
if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);

// Security middleware
app.use(helmet());
app.use(compression());

// General rate limiting for all requests
app.use(generalLimiter);

const configuredOrigins = [
  ...(process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  process.env.FRONTEND_URL,
  ...(process.env.NODE_ENV === "production"
    ? []
    : ["http://localhost:5173", "http://localhost:4173"]),
].filter(Boolean);

const allowedOrigins = [...new Set(configuredOrigins)];

// Fail closed: require at least one origin in production
if (allowedOrigins.length === 0 && process.env.NODE_ENV === 'production') {
  throw new Error('ALLOWED_ORIGINS must be configured in production');
}

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
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Admin-Key"],
  }),
);

// Body parsers with size limits
app.use(express.text({ type: "text/plain", limit: "50kb" }));
app.use(express.json({ limit: "10kb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// API responses contain potentially sensitive data and must not be cached.
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use("/api", apiRoutes);

// 404 handler (must be after all routes)
app.use(notFoundHandler);

// Error handler (must be last)
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  logger.info(`Server is running on port ${process.env.PORT || 5000}`);
});

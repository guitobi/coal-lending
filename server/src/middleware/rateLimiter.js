import rateLimit from "express-rate-limit";

// General rate limiter: 100 requests per 15 minutes per IP
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many requests from this IP, please try again later.",
    });
  },
});

// Strict limiter for form submissions: 5 requests per hour per IP
export const strictFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 requests per hour
  message: {
    error:
      "Too many form submissions from this IP, please try again after an hour.",
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error:
        "Too many form submissions from this IP, please try again after an hour.",
    });
  },
});

// Admin endpoints limiter: 10 requests per hour per IP
export const adminLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 requests per hour
  message: {
    error: "Too many admin requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many admin requests from this IP, please try again later.",
    });
  },
});

// Heatmap data collection limiter: 1000 requests per 15 minutes per IP
export const heatmapLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Higher limit for analytics data
  message: {
    error: "Too many heatmap requests, please slow down.",
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many heatmap requests, please slow down.",
    });
  },
});

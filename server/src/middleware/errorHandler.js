import logger from "../config/logger.js";

// Centralized error handling middleware
export const errorHandler = (err, req, res, next) => {
  // Log the error internally (with full details)
  logger.error("Request error", {
    method: req.method,
    path: req.path,
    ip: req.ip,
    error: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });

  // Determine status code
  const statusCode = err.statusCode || err.status || 500;

  // Send safe error response to client (no internal details)
  res.status(statusCode).json({
    error:
      statusCode === 500
        ? "Internal server error. Please try again later."
        : err.message || "An error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

// 404 Not Found handler
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
};

// Async error wrapper for route handlers
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

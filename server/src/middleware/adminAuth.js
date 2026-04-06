// Admin authentication middleware
// Protects admin endpoints with API key authentication

export const adminAuth = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers.authorization;

  // Check if authorization header exists
  if (!authHeader) {
    return res.status(401).json({
      error: "Authentication required. Please provide a valid API key.",
    });
  }

  // Extract the token (format: "Bearer <token>")
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  // Get the admin API key from environment
  const adminApiKey = process.env.ADMIN_API_KEY;

  // Check if admin API key is configured
  if (!adminApiKey) {
    console.error(
      "[SECURITY WARNING] ADMIN_API_KEY is not configured in .env file",
    );
    return res.status(500).json({
      error: "Server configuration error. Please contact administrator.",
    });
  }

  // Verify the token matches the admin API key
  if (token !== adminApiKey) {
    // Log failed authentication attempt
    console.warn("[AUTH FAILED]", {
      timestamp: new Date().toISOString(),
      ip: req.ip,
      path: req.path,
      method: req.method,
    });

    return res.status(403).json({
      error: "Invalid API key. Access denied.",
    });
  }

  // Authentication successful, proceed to the next middleware
  next();
};

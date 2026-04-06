import { ZodError } from "zod";

// Generic validation middleware factory
export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      // Validate and parse the request body
      const validatedData = await schema.parseAsync(req.body);

      // Replace req.body with validated and sanitized data
      req.body = validatedData;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Format validation errors for client
        const errors = error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          error: "Validation failed",
          details: errors,
        });
      }

      // Pass other errors to the error handler
      next(error);
    }
  };
};

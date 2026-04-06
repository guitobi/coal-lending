import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";
import { createProblem } from "../controllers/problem.controller.js";
import {
  storeHeatmapData,
  getHeatmapData,
  getHeatmapDataByType,
  clearHeatmapData,
} from "../controllers/heatmap.controller.js";

// Import validation middleware
import { validate } from "../middleware/validate.js";
import { orderSchema } from "../schemas/order.schema.js";
import { problemSchema } from "../schemas/problem.schema.js";
import { heatmapSchema } from "../schemas/heatmap.schema.js";

// Import rate limiters
import {
  strictFormLimiter,
  heatmapLimiter,
  adminLimiter,
} from "../middleware/rateLimiter.js";

// Import admin auth
import { adminAuth } from "../middleware/adminAuth.js";

const router = Router();

// Order and problem routes (with strict rate limiting and validation)
router.post("/order/new", strictFormLimiter, validate(orderSchema), createOrder);
router.post("/problem/new", strictFormLimiter, validate(problemSchema), createProblem);

// Heatmap analytics routes (with heatmap rate limiting and validation)
router.post("/heatmap/click", heatmapLimiter, validate(heatmapSchema), storeHeatmapData);
router.post("/heatmap/scroll", heatmapLimiter, validate(heatmapSchema), storeHeatmapData);
router.post("/heatmap/mouse", heatmapLimiter, validate(heatmapSchema), storeHeatmapData);
router.post("/heatmap/form-focus", heatmapLimiter, validate(heatmapSchema), storeHeatmapData);
router.post("/heatmap/form-change", heatmapLimiter, validate(heatmapSchema), storeHeatmapData);

// Heatmap data access routes (protected with admin auth)
router.get("/heatmap", adminAuth, adminLimiter, getHeatmapData);
router.get("/heatmap/:type", adminAuth, adminLimiter, getHeatmapDataByType);
router.delete("/heatmap", adminAuth, adminLimiter, clearHeatmapData);

export default router;

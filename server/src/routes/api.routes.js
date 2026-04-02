import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";
import { createProblem } from "../controllers/problem.controller.js";
import {
  storeHeatmapData,
  getHeatmapData,
  getHeatmapDataByType,
  clearHeatmapData,
} from "../controllers/heatmap.controller.js";

const router = Router();

// Order and problem routes
router.post("/order/new", createOrder);
router.post("/problem/new", createProblem);

// Heatmap analytics routes
router.post("/heatmap/click", storeHeatmapData);
router.post("/heatmap/scroll", storeHeatmapData);
router.post("/heatmap/mouse", storeHeatmapData);
router.post("/heatmap/form-focus", storeHeatmapData);
router.post("/heatmap/form-change", storeHeatmapData);
router.get("/heatmap", getHeatmapData);
router.get("/heatmap/:type", getHeatmapDataByType);
router.delete("/heatmap", clearHeatmapData);

export default router;

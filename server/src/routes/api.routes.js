import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";
import { createProblem } from "../controllers/problem.controller.js";

const router = Router();

router.post("/order/new", createOrder);
router.post("/problem/new", createProblem);

export default router;

import express from "express";
import { getProduct, createProduct } from "../controllers/productController.js";
const router = express.Router();
router.get("/getProduct", getProduct);
router.post("/createProduct", createProduct);
export default router;

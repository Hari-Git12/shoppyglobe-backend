import express from "express";
import productRoutes from "./products.js";
import cartRoutes from "./cart.js";
import userRoutes from "./users.js";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/users", userRoutes);

export default router;

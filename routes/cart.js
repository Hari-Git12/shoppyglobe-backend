import express from "express";
import Cart from "../models/cart.js";
import Product from "../models/product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Add to cart
router.post("/", auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const cartItem = new Cart({ userId: req.user, productId, quantity });
    await cartItem.save();
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put("/:id", auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

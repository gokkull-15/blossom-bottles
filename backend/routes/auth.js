const express = require("express");
const router = express.Router();
const { signup, login, dashboard, addProduct, getAllProducts, getProductById } = require("../controllers/authController");
const authenticateJWT = require("../middleware/auth");

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", authenticateJWT, dashboard);
router.post("/products", addProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

module.exports = router;

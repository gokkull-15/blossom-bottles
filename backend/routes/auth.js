const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const authenticateJWT = require("../middleware/auth");

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);

// Protected Route Example (Dashboard)
router.get("/dashboard", authenticateJWT, (req, res) => {
  res.json({ success: true, message: "Welcome to the Dashboard" });
});

module.exports = router;

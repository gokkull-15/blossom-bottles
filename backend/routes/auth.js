const express = require("express");
const router = express.Router();
const { signup, login, dashboard, addProduct } = require("../controllers/authController");
const authenticateJWT = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save images in "uploads/" folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// Multer Middleware
const upload = multer({ storage: storage });

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", authenticateJWT, dashboard);
router.post("/products", authenticateJWT, upload.single("image"), addProduct);

module.exports = router;

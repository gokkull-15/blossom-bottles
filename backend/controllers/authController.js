const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Product = require("../models/Product");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

exports.dashboard = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract userId from JWT token
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Return only email and name
    res.status(200).json({
      email: user.email,
      name: user.name, // Using 'name' from the User model
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body; // Image URL comes from frontend

    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl, // Save the URL, not the file
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


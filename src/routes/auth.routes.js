const express = require("express");
const router = express.Router();

/**
 * Register User
 */
router.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;

  res.json({
    message: "User registered successfully",
    user: {
      name,
      email,
      role
    }
  });
});

/**
 * Login User
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login successful",
    token: "dummy-jwt-token"
  });
});

module.exports = router;

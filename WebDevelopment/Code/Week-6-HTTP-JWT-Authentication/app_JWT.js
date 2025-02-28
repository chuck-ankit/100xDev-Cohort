const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const users = {};
const messages = { "user@example.com": ["Hello", "Welcome to the chat"] }; // Sample messages

// Function to generate JWT token
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (users[email]) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users[email] = { password: hashedPassword };
  res.status(201).json({ message: "User registered successfully" });
});

// Signin route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!users[email]) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, users[email].password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(email);
  res.json({ token });
});

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// Get Messages route (Protected)
app.get("/messages", authenticate, (req, res) => {
  const userMessages = messages[req.user.email] || ["This is a sampe messege for the user."];
  res.json({
    user: req.user.email,
    messages: userMessages,
    info: "This is a private message for the user."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

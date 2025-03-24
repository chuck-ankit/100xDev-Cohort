// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");
const { z } = require("zod");
const { UserModel, TodoModel } = require("./db");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.JWT_SECRET || "defaultsecret";

// Logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!", error: process.env.NODE_ENV === "development" ? err.message : undefined });
};

// Signup route
app.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password, role, age } = req.body;
        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
        if (existingUser) return res.status(400).json({ message: "Username or email already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, email, password: hashedPassword, role, age });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
});

// Signin route
app.post("/signin", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token, user: { userId: user._id, username: user.username, email: user.email, role: user.role }, message: "Login successful" });
    } catch (error) {
        next(error);
    }
});

// Middleware to verify token
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Access denied" });
    try {
        req.user = jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).json({ message: error.name === "TokenExpiredError" ? "Token expired, please login again" : "Invalid token" });
    }
};

// Get Todos
app.get("/todos", authenticate, async (req, res, next) => {
    try {
        const todos = await TodoModel.find({ userId: req.user.userId }).sort({ createdAt: -1 });
        res.json(todos);
    } catch (error) {
        next(error);
    }
});

// Add Todo
app.post("/todos", authenticate, async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ message: "Title is required" });
        const newTodo = new TodoModel({ userId: req.user.userId, title, description, completed: false });
        await newTodo.save();
        res.status(201).json({ message: "Todo added successfully", todo: newTodo });
    } catch (error) {
        next(error);
    }
});

// Update Todo
app.put("/todos/:id", authenticate, async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ message: "Title is required" });
        const todo = await TodoModel.findOneAndUpdate({ _id: req.params.id, userId: req.user.userId }, { title, description }, { new: true });
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        res.json({ message: "Todo updated successfully", todo });
    } catch (error) {
        next(error);
    }
});

// Toggle Todo
app.patch("/todos/:id/toggle", authenticate, async (req, res, next) => {
    try {
        const todo = await TodoModel.findOne({ _id: req.params.id, userId: req.user.userId });
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        todo.completed = !todo.completed;
        await todo.save();
        res.json({ message: "Todo status updated", todo });
    } catch (error) {
        next(error);
    }
});

// Delete Todo
app.delete("/todos/:id", authenticate, async (req, res, next) => {
    try {
        const todo = await TodoModel.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        next(error);
    }
});

// Apply error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

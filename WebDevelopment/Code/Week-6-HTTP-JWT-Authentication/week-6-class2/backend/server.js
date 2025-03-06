const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 



const users = [];
const JWT_SECRET = 'secretkey';

// Logger Middleware
function logger(req, res, next) {
    console.log(`${req.method} request to ${req.path}`);
    next();
}

// Error Handler Middleware
function errorHandler(err, req, res, next) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Something went wrong.", error: err.message });
}

// Authentication Middleware
function auth(req, res, next) {
    try {
        console.log("Auth headers:", req.headers.authorization); // Debug: log the auth header
        const token = req.headers.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            console.log("No token provided"); // Debug
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const decodedData = jwt.verify(token, JWT_SECRET);
        console.log("Token validated for:", decodedData.username); // Debug
        req.username = decodedData.username;
        next();
    } catch (err) {
        console.log("Token validation error:", err.message); // Debug
        return res.status(401).json({ message: "Access denied. Invalid or expired token." });
    }
}

// Routes

// 1. Signup
app.post("/signup", logger, (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ message: "Username already exists. Please choose another." });
    }

    users.push({ username, password });

    res.status(201).json({ message: "You are successfully registered." });
});

// 2. Signin
app.post("/signin", logger, (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ username: foundUser.username }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: "Logged in successfully.", token });
});

// 3. User Profile (Authenticated)
app.get('/me', logger, auth, (req, res) => {
    const user = users.find(user => user.username === req.username);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    res.json({
        message: "You are authenticated.",
        username: req.username
    });
});

// Additional Routes 


// 4. Fetch All Users (Admin-like access)
app.get('/users', logger, auth, (req, res) => {
    res.json({ users: users.map(u => ({ username: u.username })) });
});

// 5. Update Password (Self-service)
app.put('/update-password', logger, auth, (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        return res.status(400).json({ message: "Old and new passwords are required." });
    }

    if (newPassword.length < 6) {
        return res.status(400).json({ message: "New password must be at least 6 characters long." });
    }

    const user = users.find(user => user.username === req.username);
    if (!user || user.password !== oldPassword) {
        return res.status(401).json({ message: "Old password is incorrect." });
    }

    user.password = newPassword;
    res.json({ message: "Password updated successfully." });
});

// 6. Delete Account (Self-service)
app.delete('/delete-account', logger, auth, (req, res) => {
    const userIndex = users.findIndex(user => user.username === req.username);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found." });
    }

    users.splice(userIndex, 1);
    res.json({ message: "Account deleted successfully." });
});

// 7. Health Check (Public)
app.get('/health', (req, res) => {
    res.json({ status: "OK", uptime: process.uptime() });
});

// 8. Logout (Client-Side Token Purge Simulation)
app.post('/logout', logger, auth, (req, res) => {
    res.json({ message: "Logged out successfully. Clear token on client side." });
});

// Use error handler
app.use(errorHandler);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

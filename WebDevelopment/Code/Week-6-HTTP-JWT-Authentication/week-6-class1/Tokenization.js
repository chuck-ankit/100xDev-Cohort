const express = require('express');
const app = express();
app.use(express.json());

const users = [];
const messages = [
    { username: 'ankit', message: 'Hello, this is a secure message.' },
    { username: 'priyanshu', message: 'Welcome to the secure chat system!' }
];

function generateToken() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Signup Route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    users.push({ username, password });
    res.json({ message: 'User registered successfully' });
    console.log(users);
});

// Signin Route
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    user.token = generateToken();
    res.json({ message: 'Signin successful', token: user.token });
    console.log(users);
});

// Get Messages Route
app.get('/messages', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({ message: 'Token required' });
    }
    
    const user = users.find(u => u.token === token);
    if (!user) {
        return res.status(403).json({ message: 'Invalid token' });
    }
    
    const userMessages = messages.filter(m => m.username === user.username);
    res.json({ message: "This is a message for:",
        user: user.username,
        messages: userMessages
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

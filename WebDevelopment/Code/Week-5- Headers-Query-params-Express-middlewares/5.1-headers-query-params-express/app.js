const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {  // Added 'async' here
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/6");
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.get('/abd', (req, res) => {
    res.send('Hello, World from abd.!');
});

app.listen(3100, () => {
    console.log('Server is running on port 3100');
});

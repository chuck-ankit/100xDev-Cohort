const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});
app.post('/', function(req, res) {
    res.send('Hello, World from the post endpoint.');
});


app.get('/asd', function(req, res) {
    res.send('Hello, Javascript!');
});
app.listen(3000);

app.put('/', function(req, res) {
    res.send('Hello, World from the put endpoint.');
});


app.get('/create_todo', function(req, res) {
    res.send('Hello, World! for the Create todo. ');
});
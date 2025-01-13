const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <div>
      <p>Multiply: <a href="http://localhost:3000/multiply?a=1&b=2">http://localhost:3000/multiply?a=1&b=2</a></p>
      <p>Add: <a href="http://localhost:3000/add?a=1&b=2">http://localhost:3000/add?a=1&b=2</a></p>
      <p>Divide: <a href="http://localhost:3000/divide?a=1&b=2">http://localhost:3000/divide?a=1&b=2</a></p>
      <p>Subtract: <a href="http://localhost:3000/sub?a=1&b=2">http://localhost:3000/sub?a=1&b=2</a></p>
    </div>
  `);
});

app.get('/multiply', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = a * b;
  res.send(`The result of ${a} * ${b} is ${result}`);
});

app.get('/add', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = a + b;
  res.send(`The result of ${a} + ${b} is ${result}`);
});

app.get('/divide', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (b === 0) {
    res.status(400).send('Cannot divide by zero');
    return;
  }
  const result = a / b;
  res.send(`The result of ${a} / ${b} is ${result}`);
});

app.get('/sub', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = a - b;
  res.send(`The result of ${a} - ${b} is ${result}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

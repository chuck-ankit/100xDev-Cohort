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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

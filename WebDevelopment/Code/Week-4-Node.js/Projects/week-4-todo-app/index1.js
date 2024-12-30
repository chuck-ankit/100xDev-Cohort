const express = require('express')

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const app = express();

app.get("/", function(req, res) {
    const n = parseInt(req.query.n, 10); // Make sure to convert the query parameter to an integer
    const ans = calculateSum(n);
    res.send(ans.toString());
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

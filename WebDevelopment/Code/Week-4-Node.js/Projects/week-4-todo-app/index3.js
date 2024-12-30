const express = require('express');
const app = express();

const user = [{
    'name': 'Ankit Keshri',
    'kidney': [{
        'healthy': true
    }]
}];

// Middleware to parse JSON
app.use(express.json());

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// GET route
app.get('/', (req, res) => {
    const ankitKidney = user[0].kidney;
    const numberOfKidneys = ankitKidney.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < ankitKidney.length; i++) {
        if (ankitKidney[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    });
});

// POST route
app.post("/", (req, res) => {
    console.log('Received POST request');
    console.log('Request Body:', req.body);

    const isHealthy = req.body.isHealthy;

    if (typeof isHealthy === 'undefined') {
        return res.status(400).json({ error: 'Missing isHealthy property in request body' });
    }

    user[0].kidney.push({
        'healthy': isHealthy
    });

    console.log('Updated User Data:', user);

    res.json({
        message: 'Kidney status updated successfully',
        updatedData: user[0].kidney
    });
});

//PUT route

app.put("/", function (req, res) {
    console.log('Received PUT request');
    for (let i = 0; i < user[0].kidney.length; i++) {
        user[0].kidney[i].healthy = true;
    }
    res.json({});


});


app.delete("/", function (req, res) {
    console.log('Received DELETE request');
    
    // Remove all kidney entries
    user[0].kidney = [];
    
    console.log('Updated User Data:', user);
    
    res.json({
        message: 'All kidneys have been removed',
        updatedData: user[0].kidney
    });
});




// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

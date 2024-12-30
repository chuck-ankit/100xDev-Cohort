const express = require('express');
const fs = require('fs');

const app = express();

const user = [{
    'name': 'Ankit Keshri',
    'kidney': [{
        'healthy': true
    }]
}];

app.get('/', (req, res) => {
    const ankitKidney = user[0].kidney;
    const numberOfKidneys = ankitKidney.length; // Corrected variable name
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < ankitKidney.length; i++) {
        if (ankitKidney[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys; // Corrected calculation
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys // Corrected key
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    } else {
        console.log(`File: ${filePath}`, data);
    }
});

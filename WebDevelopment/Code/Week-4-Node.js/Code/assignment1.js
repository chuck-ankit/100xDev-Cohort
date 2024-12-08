// Assignments #1 - Create a CLI

// Create a command-line interface that lets the user specify a file path,
// and the Node.js process counts the number of words inside it.

const fs = require('fs');

function main(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => { 
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    } else {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === " " || data[i] === "\n") { 
          total++;
        }
      }
      console.log(`The total number of words in the file is: ${total + 1}`);
    }
  });
}

// Call the function with the file name
main("text.txt");

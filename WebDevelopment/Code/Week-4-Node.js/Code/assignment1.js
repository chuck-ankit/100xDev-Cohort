// Assignments #1 - Create a CLI

// Create a command-line interface that lets the user specify a file path,
// and the Node.js process counts the number of words inside it.

const fs = require('fs');

function countWords(fileName) {
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Splitting the data into words and counting them
    const words = data.split(/\s+/); // Split by whitespace (spaces, tabs, newlines)
    const wordCount = words.filter(word => word.length > 0).length; // Exclude empty strings
    console.log(`The file contains ${wordCount} words.`);
  });
}

function main() {
  const fileName = process.argv[2]; // File path passed as a command-line argument
  if (!fileName) {
    console.error("Please provide a file path as an argument.");
    console.log("Usage: node script.js <file-path>");
    return;
  }

  countWords(fileName);
}

main();

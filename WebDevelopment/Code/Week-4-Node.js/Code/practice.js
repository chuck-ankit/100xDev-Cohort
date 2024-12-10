const fs = require('fs');
const { Command } = require('commander'); // Correct import
const program = new Command();

program
    .name('counter')
    .description('CLI to do file-based tasks')
    .version('0.1.0');

program
    .command('count_letters') // Fixed typo
    .description('Count the number of times a given letter appears in a file')
    .argument('<file>', 'File to count') // This is the parameter passed to action
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => { // Using the correct `file` parameter
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }

            let total = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] === " " || data[i] === "\n") {
                    total++;
                }
            }
            console.log(`The total number of words in the file is: ${total + 1}`);
        });
    });

program.parse(); // This must be outside all definitions


//Command to run: node practice.js count_letters text.txt
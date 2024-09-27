//Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

const fs = require("fs");

function readTheFile(sendTheFinalValue){
    fs.readFile("a.txt","utf-8",function(err, data) {
        sendTheFinalValue(data);
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p = readFile("a.txt");

function callback(contents){
    console.log(contents);
    }

p.then(callback);
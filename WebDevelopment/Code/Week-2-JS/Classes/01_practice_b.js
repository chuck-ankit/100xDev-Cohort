const fs = require('fs');

function print(err, data){
    console.log("Error is :");
    console.log(err);
    console.log("Data is :");
    console.log(data);
}

fs.readFile("a.txt","utf-8",print);
fs.readFile("b.txt", "utf-8",print);
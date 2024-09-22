const fs = require("fs");

// Asynchronous readFile with a callback
fs.readFile("a.txt", "utf-8", (err, contents) => {
    if (err) {
        console.error("Error reading a.txt:", err);
        return;
    }
    console.log(contents); // Log the contents of 'a.txt' after reading
});

// const content = fs.readFile("a.txt","utf-8");
// console.log(content);

// Synchronous readFileSync
const contents1 = fs.readFileSync("b.txt", "utf-8"); // This works synchronously
console.log(contents1); // Log the contents of 'b.txt'

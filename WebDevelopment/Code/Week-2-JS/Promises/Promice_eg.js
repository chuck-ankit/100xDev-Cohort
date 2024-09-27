// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2
/*
console.log("Hi");

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();
*/
//   Q: Write a function that
//   Reads the contents of a file
//   Trims the extra space from the left and right
//   Writes it back to the file

function random(resolve) {
    console.log("This is random Function.");
    resolve();  // Call resolve to fulfill the promise
}

let p = new Promise(random); // Pass the function reference instead of invoking it

function callback() {
    console.log("Promise succeeded.");  // Fixed the spelling of "succeeded"
}

p.then(callback);  // Execute the callback when the promise resolves

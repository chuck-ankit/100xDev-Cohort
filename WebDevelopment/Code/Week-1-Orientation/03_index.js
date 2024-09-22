let isStudent = true;
console.log(isStudent);

let users = ["Ankit","Stuwart","Rubicon"];
console.log(users);
function add(a, b) {
    return Number(a) + Number(b);
}

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("Ankit"); // "Hello, John"
let message1 = greet("Stuwart"); // "Hello, Stuwart"


let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
let sum = add(a, b);
console.log(sum);
// Create a function which takes an array of objects as an input and returns the objects whose age > 18 and are male

function filterMalesAbove18(arr) {
    // Initialize the new array
    let newArr = [];

    // Loop through the input array
    for (let i = 0; i < arr.length; i++) {
        // If the age is greater than 18 and the gender is male, push the object to the new array
        if (arr[i].age > 18 && arr[i].gender === "male") {
            newArr.push(arr[i]);
        }
    }
    
    // Return the new array
    return newArr;
}

const arr = [
    {name: "John", age: 21, gender: "male"},
    {name: "Alice", age: 16, gender: "female"},
    {name: "Bob", age: 25, gender: "male"},
    {name: "Emily", age: 18, gender: "female"}
];

const result = filterMalesAbove18(arr);
console.log(result);


//Solution 2(More Optimized)

// function filterMalesAbove18(arr) {
//     return arr.filter(person => person.age > 18 && person.gender === "male");
// }

// const arr = [
//     {name: "John", age: 21, gender: "male"},
//     {name: "Alice", age: 16, gender: "female"},
//     {name: "Bob", age: 25, gender: "male"},
//     {name: "Emily", age: 18, gender: "female"}
// ];

// const result = filterMalesAbove18(arr);
// console.log(result);

//Function to add two numbers 
function addNumber(a,b){
    return parseInt(a) + parseInt(b);
}

let ans = addNumber(3,6);
console.log(ans);


// Function to add from 1 to n numbers

function sumOfNumbers(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

let sumN = sumOfNumbers(7);
console.log(sumN);
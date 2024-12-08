//Thenalbke 

/* 
In JavaScript, a thenable is an object that has a then() method. This method is used to handle the eventual success or failure of an asynchronous operation, similar to how promises work.
Key Points:
Not a Promise:
A thenable is not necessarily a Promise, but it can be treated like one by functions that expect promises.
then() Method:
The core requirement for a thenable is the then() method, which accepts two callback functions:
onFulfilled: Called when the asynchronous operation is successful.
onRejected: Called when the operation fails.
Interoperability:
The then() method allows thenables to be used with functions that expect promises, such as Promise.resolve() and Promise.race().
*/

const thenable = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled(42), 1000);      
    },
};

async function main(){
    const v = await thenable;
    console.log("Hello world!");
}


main();


// Every promise is a thenable.
// But Every thenable is not a promise.
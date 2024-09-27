class Promise2 {
    constructor(fn) {
        // Store the resolve method for later use
        this.resolve = null;

        // Bind this context to ensure correct behavior of resolve
        fn(() => {
            if (this.resolve) {
                this.resolve();
            }
        });
    }

    then(callback) {
        // Set the resolve method to the callback passed
        this.resolve = callback;
    }
}

function readTheFile(resolve) {
    setTimeout(function() {
        console.log("Callback based setTimeout completed");
        resolve(); // Call the resolve function after 3 seconds
    }, 3000);
}

function setTimeoutPromisified() {
    return new Promise2(readTheFile); // Call Promise2 with the readTheFile function
}

let p = setTimeoutPromisified();

function callback() {
    console.log("Callback has been called.");
}

p.then(callback); // Attach the callback to be called when the promise resolves

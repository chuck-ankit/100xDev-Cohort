function doAsyncOp(resolve){
    setTimeout(resolve,3000);
    console.log("Hello ")
}

const p = new Promise(doAsyncOp);

function callback(){
    console.log("Callback is called.");
}

p.then(callback);
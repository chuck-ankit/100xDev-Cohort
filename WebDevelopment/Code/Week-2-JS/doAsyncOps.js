let c = new Promise(function(resolve){
    let c = 0;
    for (let i=0;i<100000000; i++){
        c++;
    }
    resolve();
    console.log(c);
    
})

function callback(){
    console.log("Lets End it.");
}

c.then(callback);
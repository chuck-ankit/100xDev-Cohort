

/*

Q: Write code that
* logs hi after 1 second
* logs hello 3 seconds after step 1
* logs hello there 5 seconds after step 2
 
*/

function setTImeoutPromised(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callbackHi(){
    console.log('Hi');
}

function callbackHello(){
    console.log('Hello');
}

function callbackHelloThere(){
    console.log('Hello There');
}

setTImeoutPromised(1000).then(callbackHi);
setTImeoutPromised(3000).then(callbackHello);
setTImeoutPromised(5000).then(callbackHelloThere);



setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hello");
  
      setTimeout(function () {
        console.log("hello there");
      }, 5000);
    }, 3000);
  }, 1000);
  
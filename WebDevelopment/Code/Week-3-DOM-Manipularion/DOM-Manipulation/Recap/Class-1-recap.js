//Simple JS

// function AddTodo(){
//     const value = document.querySelector("input").value;
//     const newTodoDivEl = document.createElement("div");
//     newTodoDivEl.innerHTML = "<div id='new'>"+value+"</div><button onClick='DeleteBtn()' class=btn>Delete</button>";
//     document.querySelector("#todoParent").appendChild(newTodoDivEl); 
// }

// function DeleteBtn(){
//     document.querySelector("#todoParennt").removeChild("todoParent");
// }



// Complex Js 

function AddTodo(){
    //
    const value = document.querySelector("input").value;
    const spanEl = document.createElement("span");
    const buttonEL = document.createElement("button");
    spanEl.innerHTML = value;
    buttonEL.innerHTML= "Delete";
    buttonEL.className = "btn";
    ///
    const divEL = document.createElement("div");
    divEL.appendChild(spanEl);
    divEL.appendChild(buttonEL);
    ////
    document.querySelector("body").appendChild(divEL);
}
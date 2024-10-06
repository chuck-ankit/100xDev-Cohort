function AddTodo(){
    const value = document.querySelector("input").value;
    const newTodoDivEl = document.createElement("div").value;
    newTodoDivEl.innerHTML = value;
    document.querySelector("body").appendChild(newTodoDivEl);
}
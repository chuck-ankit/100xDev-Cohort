//Brute Force Solution 





// let ctr = 1;

// function deleteTodo(index) {
//     const element = document.getElementById(index);
//     if (element) {
//         element.parentNode.removeChild(element);
//     }
// }

// function addTODO() {
//     const inputEL = document.querySelector("input");
//     const value = inputEL.value;
//     if (value.trim() === "") {
//         alert("Please enter a TODO item.");
//         return;
//     }
    
//     const newDivEl = document.createElement("div");
//     newDivEl.setAttribute("id", `todo-${ctr}`);
//     newDivEl.setAttribute("class", "childTodo");  // Add class attribute
    
//     newDivEl.innerHTML = `
//         <div>${ctr}. ${value}</div>
//         <button onclick="deleteTodo('todo-${ctr}')">Delete</button>
//     `;
    
//     document.getElementById("todoParent").appendChild(newDivEl);
//     ctr++;
    
//     inputEL.value = ""; // Clear the input after adding the TODO
// }



// Optimized Solution


let ctr = 1;

// Load TODOs from Local Storage on page load
window.onload = function () {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => {
        addTODOFromStorage(todo.id, todo.value);
    });
    ctr = savedTodos.length + 1;  // Continue ctr from the last saved TODO
};

function deleteTodo(index) {
    const element = document.getElementById(index);
    if (element) {
        element.parentNode.removeChild(element);
    }

    // Update Local Storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.filter(todo => todo.id !== index);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function addTODO() {
    const inputEL = document.querySelector("input");
    const value = inputEL.value;
    if (value.trim() === "") {
        alert("Please enter a TODO item.");
        return;
    }

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", `todo-${ctr}`);
    newDivEl.setAttribute("class", "childTodo");  // Add class attribute

    newDivEl.innerHTML = `
        <div>${ctr}. ${value}</div>
        <button onclick="deleteTodo('todo-${ctr}')">Delete</button>
    `;

    document.getElementById("todoParent").appendChild(newDivEl);

    // Save to Local Storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ id: `todo-${ctr}`, value });
    localStorage.setItem('todos', JSON.stringify(todos));

    ctr++;
    inputEL.value = ""; // Clear the input after adding the TODO
}

// Add TODO from Local Storage
function addTODOFromStorage(id, value) {
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", id);
    newDivEl.setAttribute("class", "childTodo");

    newDivEl.innerHTML = `
        <div>${id.split('-')[1]}. ${value}</div>
        <button onclick="deleteTodo('${id}')">Delete</button>
    `;

    document.getElementById("todoParent").appendChild(newDivEl);
}

let ctr = 1;

// Load TODOs from Local Storage on page load
window.onload = function () {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => {
        addTODOFromStorage(todo.id, todo.value, todo.priority);
    });
    ctr = savedTodos.length + 1;
};

// Delete TODO
function deleteTodo(index) {
    const element = document.getElementById(index);
    if (element) {
        element.parentNode.removeChild(element);
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.filter(todo => todo.id !== index);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

// Add TODO
function addTODO() {
    const inputEL = document.getElementById("todoInput");
    const value = inputEL.value;
    const priority = document.getElementById("prioritySelect").value;

    if (value.trim() === "") {
        alert("Please enter a TODO item.");
        return;
    }

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", `todo-${ctr}`);
    newDivEl.setAttribute("class", "childTodo");

    newDivEl.innerHTML = `
        <div class="todo-content">
            <div>${ctr}. ${value}</div>
            <div class="priority">Priority: ${priority}</div>
        </div>
        <div>
            <button class="edit-btn" onclick="editTodo('todo-${ctr}', '${value}')">Edit</button>
            <button class="delete-btn" onclick="deleteTodo('todo-${ctr}')">Delete</button>
        </div>
    `;

    document.getElementById("todoParent").appendChild(newDivEl);

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ id: `todo-${ctr}`, value, priority });
    localStorage.setItem('todos', JSON.stringify(todos));

    ctr++;
    inputEL.value = "";
}

// Edit TODO
function editTodo(id, oldValue) {
    const newValue = prompt("Edit your task:", oldValue);
    if (newValue === null || newValue.trim() === "") return;

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos[todoIndex].value = newValue;
    localStorage.setItem('todos', JSON.stringify(todos));

    document.getElementById(id).querySelector(".todo-content div:first-child").textContent = `${id.split('-')[1]}. ${newValue}`;
}

// Add TODO from Local Storage
function addTODOFromStorage(id, value, priority) {
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", id);
    newDivEl.setAttribute("class", "childTodo");

    newDivEl.innerHTML = `
        <div class="todo-content">
            <div>${id.split('-')[1]}. ${value}</div>
            <div class="priority">Priority: ${priority}</div>
        </div>
        <div>
            <button class="edit-btn" onclick="editTodo('${id}', '${value}')">Edit</button>
            <button class="delete-btn" onclick="deleteTodo('${id}')">Delete</button>
        </div>
    `;

    document.getElementById("todoParent").appendChild(newDivEl);
}

// Filter TODOs
function filterTODOs() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const todos = document.querySelectorAll(".childTodo");

    todos.forEach(todo => {
        const task = todo.querySelector(".todo-content div:first-child").textContent.toLowerCase();
        if (task.includes(searchValue)) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

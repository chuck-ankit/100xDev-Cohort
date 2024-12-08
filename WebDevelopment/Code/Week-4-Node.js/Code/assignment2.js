const fs = require('fs');
const path = require('path');

const todosFilePath = path.join(__dirname, 'todos.json');

// Ensure the todos.json file exists
if (!fs.existsSync(todosFilePath)) {
  fs.writeFileSync(todosFilePath, JSON.stringify([]));
}

function loadTodos() {
  const data = fs.readFileSync(todosFilePath, 'utf8');
  return JSON.parse(data);
}

function saveTodos(todos) {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

function addTodo(task) {
  const todos = loadTodos();
  todos.push({ task, done: false });
  saveTodos(todos);
  console.log(`Todo added: "${task}"`);
}

function deleteTodo(index) {
  const todos = loadTodos();
  if (index < 0 || index >= todos.length) {
    console.error("Invalid index. Unable to delete.");
    return;
  }
  const removed = todos.splice(index, 1);
  saveTodos(todos);
  console.log(`Todo deleted: "${removed[0].task}"`);
}

function markDone(index) {
  const todos = loadTodos();
  if (index < 0 || index >= todos.length) {
    console.error("Invalid index. Unable to mark as done.");
    return;
  }
  todos[index].done = true;
  saveTodos(todos);
  console.log(`Todo marked as done: "${todos[index].task}"`);
}

function listTodos() {
  const todos = loadTodos();
  if (todos.length === 0) {
    console.log("No todos found.");
    return;
  }
  console.log("Your todos:");
  todos.forEach((todo, index) => {
    console.log(`${index}. [${todo.done ? '✔' : ' '}] ${todo.task}`);
  });
}

// CLI interaction
const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
  case 'add':
    if (!argument) {
      console.error("Please provide a task to add.");
    } else {
      addTodo(argument);
    }
    break;
  case 'delete':
    if (isNaN(argument)) {
      console.error("Please provide a valid index to delete.");
    } else {
      deleteTodo(Number(argument));
    }
    break;
  case 'done':
    if (isNaN(argument)) {
      console.error("Please provide a valid index to mark as done.");
    } else {
      markDone(Number(argument));
    }
    break;
  case 'list':
    listTodos();
    break;
  default:
    console.log("Usage:");
    console.log("  add <task>      - Add a new todo");
    console.log("  delete <index>  - Delete a todo by index");
    console.log("  done <index>    - Mark a todo as done by index");
    console.log("  list            - List all todos");
}

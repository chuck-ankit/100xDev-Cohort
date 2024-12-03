import React, { useState } from 'react'; // Importing React and useState from React library
import { useForm } from 'react-hook-form'; // Importing useForm from react-hook-form for form handling

function Task3() {
  // Initializing useForm for form handling
  const { register, handleSubmit, reset } = useForm();
  // Defining initial state for todos
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Study for the University Exams",
      completed: false
    },
  ]);

  // Function to add a new todo item
  const addTodo = (data) => {
    // Creating a new todo object with the data from the form
    const newTodo = {
      id: todos.length + 1,
      title: data.todoTitle,
      completed: false,
    };
    // Updating the todos state with the new todo item
    setTodos([...todos, newTodo]);
    // Resetting the form after submission
    reset();
  };

  return (
    <div className="flex flex-col justify-start items-center h-full min-h-screen bg-emerald-50">
      {/* Header of the page */}
      <h1 className="text-4xl font-bold text-gray-800 mt-8">Task 3 Page: Todo Abstract Application</h1>
      
      <div className='mt-12 p-3 bg-red-50 flex-col w-full max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Todos</h2>
        {/* Form to add new todos */}
        <form onSubmit={handleSubmit(addTodo)} className="mb-4 flex justify-between">
          {/* Input field for the todo title, registered with react-hook-form */}
          <input
            {...register('todoTitle', { required: true })}
            placeholder="Add a new task"
            className="flex-grow mr-2 p-2 border border-gray-300 rounded"
          />
          {/* Submit button for adding new todo */}
          <button 
            type="submit"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Add Todo
          </button>
        </form>
        {/* Mapping over todos state to display each todo item */}
        {todos.map((todo) => (
          <div key={todo.id} className={`flex items-center p-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {/* Checkbox to mark todo as completed */}
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => setTodos(todos.map((t) => t.id === todo.id ? { ...t, completed: !t.completed } : t))}
            />
            {/* Displaying the title of the todo item */}
            <span className="ml-2">{todo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task3;

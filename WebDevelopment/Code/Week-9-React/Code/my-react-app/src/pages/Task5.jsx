// Task5.js
import React, { useState } from 'react';

function Task5() {
  // Example 1: Numeric state - Counter
  const [count, setCount] = useState(0);

  // Example 2: String state - Input binding
  const [inputValue, setInputValue] = useState('');

  // Example 3: Boolean state - Toggle theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Example 4: Array state - Task list
  const [tasks, setTasks] = useState([]);

  // Example 5: Object state - User details
  const [user, setUser] = useState({ name: '', age: '' });

  return (
    <div className={`h-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-emerald-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center">Task 5</h1>

        {/* Example 1: Counter */}
        <div className="p-4 bg-emerald-100 rounded shadow space-y-2">
          <h2 className="text-2xl font-semibold">Counter</h2>
          <p className="text-lg">Current count: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
          >
            Decrement
          </button>
        </div>

        {/* Example 2: Input binding */}
        <div className="p-4 bg-emerald-100 rounded shadow space-y-2">
          <h2 className="text-2xl font-semibold">Input Binding</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Type something..."
          />
          <p className="text-lg">You typed: {inputValue}</p>
        </div>

        {/* Example 3: Toggle Theme */}
        <div className="p-4 bg-emerald-100 rounded shadow space-y-2">
          <h2 className="text-2xl font-semibold">Toggle Theme</h2>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-4 py-2 rounded ${
              isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'
            } hover:bg-gray-500`}
          >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        {/* Example 4: Dynamic List */}
        <div className="p-4 bg-emerald-100 rounded shadow space-y-2">
          <h2 className="text-2xl font-semibold">Task List</h2>
          <input
            type="text"
            placeholder="Add a task"
            className="w-full p-2 border border-gray-300 rounded"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                setTasks([...tasks, e.target.value]);
                e.target.value = '';
              }
            }}
          />
          <ul className="space-y-1">
            {tasks.map((task, index) => (
              <li key={index} className="p-2 bg-gray-200 rounded">
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Example 5: Object State */}
        <div className="p-4 bg-emerald-100 rounded shadow space-y-2">
          <h2 className="text-2xl font-semibold">User Information</h2>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-lg">
            Name: {user.name || 'Not set'}, Age: {user.age || 'Not set'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task5;

import React from 'react';
import { useState } from 'react';

function Task2() { 
  return (
    <div className="bg-emerald-50 min-h-screen flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold text-gray-800 mt-8">Task 2 Page</h1>
      <div className="space-y-4 items-center justify-center bg-fuchsia-50 p-8 mt-12 rounded-md w-auto shadow-lg">
        <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage />
      </div>
    </div>
  );
}

const ToggleMessage = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(prevCount => prevCount + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={increment} 
        className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Increase count
      </button>
      <span className="mt-2 text-xl font-medium text-gray-700">{notificationCount}</span>
    </div>
  );
};

export default Task2;

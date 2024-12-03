import React from 'react';
import '../App.css';
import { useState } from 'react';

function Task1() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-emerald-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-8">Task 1 Page</h1>
      <div className='bg-fuchsia-50 shadow-lg rounded-lg p-8 text-center'>
        <h2 className='text-3xl m-4 font-semibold text-gray-800'>Counter: {count}</h2>
        <div className='flex flex-col items-center space-y-4'>
          <button 
            onClick={() => setCount(count + 1)} 
            className='btn py-2 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
          >
            Increment
          </button>
          <button 
            onClick={() => setCount(count - 1)} 
            className='btn py-2 px-6 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task1;

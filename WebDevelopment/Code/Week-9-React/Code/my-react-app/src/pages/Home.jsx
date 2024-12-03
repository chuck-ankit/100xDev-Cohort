import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Hero Section */}
      <div className="bg-emerald-300 text-center p-10 rounded-lg shadow-md my-4">
        <h1 className="text-5xl font-bold text-white">Learn React Basics</h1>
        <p className="text-white text-lg mt-2">Build powerful user interfaces with ease!</p>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex w-full mt-8 space-x-4">
        {/* Sidebar */}
        <aside className="w-1/4 bg-emerald-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Topics:</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>What is React?</li>
            <li>Components</li>
            <li>State & Props</li>
            <li>React Hooks</li>
            <li>Routing</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Basics</h2>
          <p className="text-gray-700 mb-2">
            React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that can manage their own state.
          </p>
          <p className="text-gray-700 mb-2">
            With React, you can create dynamic and responsive web applications by breaking the UI into small, manageable pieces called components.
          </p>
          <p className="text-gray-700">
            React uses a virtual DOM to efficiently update and render only the components that change, making it highly performant.
          </p>
        </main>
      </div>

      {/* Slider */}
      <div className="w-full bg-emerald-100 p-6 rounded-lg shadow-md my-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Learn React with Examples</h2>
        <div className="flex overflow-x-auto space-x-4">
          <div className="min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Component Example</h3>
            <p className="text-gray-600 text-sm">Learn how to build a simple React component.</p>
          </div>
          <div className="min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">State Management</h3>
            <p className="text-gray-600 text-sm">Understand state in React with examples.</p>
          </div>
          <div className="min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">React Router</h3>
            <p className="text-gray-600 text-sm">Navigate between pages using React Router.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

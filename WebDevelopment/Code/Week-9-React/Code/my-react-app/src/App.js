import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <div className="App bg-emerald-50 min-h-screen">
        <nav className="bg-emerald-200 p-4 shadow-lg">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/task1" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Task 1</Link></li>
            <li><Link to="/task2" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Task 2</Link></li>
            <li><Link to="/task3" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Task 3</Link></li>
            <li><Link to="/task4" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Task 4</Link></li>
            <li><Link to="/task5" className="text-xl font-semibold text-gray-700 hover:text-gray-900">Task 5</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';

function App() {
  return (
    <Router>
    <div className="App min-h-screen bg-red-orange-50">
      <nav className="bg-red-orange-100 p-5 shadow-lg" role="navigation">
        <ul className="flex justify-start space-x-7 mx-7">
          <li><Link to='/' className="text-xl font-medium text-red-orange-950 hover:text-red-orange-600">Home</Link> </li>
          <li><Link to='/task1' className="text-xl font-medium text-red-orange-950 hover:text-red-orange-600">Task 1</Link> </li>
          <li><Link to='/task2' className="text-xl font-medium text-red-orange-950 hover:text-red-orange-600">Task 2</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        {/* <Route path="/task3" element={<Task3 />} /> */}
        {/* <Route path="/task4" element={<Task4 />} /> */}
        {/* <Route path="/task5" element={<Task5 />} /> */}
        {/* <Route path="/task6" element={<Task6 />} /> */}
        {/* <Route path="/task7" element={<Task7 />} /> */}
        {/* <Route path="/task8" element={<Task8 />} /> */}
        {/* <Route path="/task9" element={<Task9 />} /> */}
        {/* <Route path="/task10" element={<Task10 />} /> */}
        {/* <Route path="/task11" element={<Task11 />} /> */}
      </Routes>
      
    </div>
    </Router>
  )
}

export default App;

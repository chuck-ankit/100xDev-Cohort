import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-300 underline bold items-center text-center text-4xl sm:text-5xl lg:text-6xl font-mono font-weight: 800;'>
        Flex and Grid in Tailwind CSS
      </h1>

      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4 text-white flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/Screen1" className="hover:underline">Screen 1</Link>
        <Link to="/Screen2" className="hover:underline">Screen 2</Link>
        <Link to="/Screen3" className="hover:underline">Screen 3</Link>
        <Link to="/Screen4" className="hover:underline">Screen 4</Link>
        <Link to="/Screen5" className="hover:underline">Screen 5</Link>
      </nav>

      {/* Flex Section */}
      <h3 className='text-2xl font-semibold my-4 text-center bg-blend-color-dodge'>Flex Section</h3>
      <div className="m-4 p-3 bg-gray-100 rounded-md">
        <div className='flex justify-around m-2'>
          <div className="flex-initial bg-slate-500 p-2 rounded-md">Hi, I am flex initial.</div>
          <div className="flex bg-orange-200 justify-center items-center p-2 rounded-md">Hi, I am the second flex box.</div>
          <div className="flex bg-orange-400 p-2 rounded-md">Hi, I am the third flex box.</div>
        </div>
        <div className='flex-col justify-around m-2'>
          <div className="flex-auto bg-orange-700 p-2 rounded-md m-2 text-center">Hi, I am the Fourth flex box.</div>
          <div className='flex justify-center m-2 bg-orange-200 rounded-md'>
            <div className="flex-initial bg-slate-500 p-2 rounded-md">Hi, I am flex initial.</div>
            <div className="flex bg-orange-600 justify-center items-center p-2 rounded-md">Hi, I am the second flex box.</div>
            <div className="flex bg-orange-400 p-2 rounded-md">Hi, I am the third flex box.</div>
          </div>
          <div className="flex-auto bg-red-200 p-2 rounded-md text-cyan-800 m-2 text-center">Hi, I am the Fifth flex box.</div>
        </div>
      </div>

      {/* Grid Section */}
      <h3 className='text-2xl font-semibold my-4 text-center bg-blend-color-dodge'>Grid Section</h3>

      {/* Equal Span Grid */}
      <h3 className='text-xl font-medium my-3 text-center bg-blend-color-dodge'>Equal Span Grid</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4 m-6 sm:m-12 p-4 bg-fuchsia-100'>
        <div className='bg-fuchsia-200 m-2 p-2 text-center'> First </div>
        <div className='bg-fuchsia-200 m-2 p-2 text-center'> Second </div>
        <div className='bg-fuchsia-200 m-2 p-2 text-center'> Third </div>
        <div className='bg-fuchsia-200 m-2 p-2 sm:col-start-2 row-start-2 text-center'> Fourth </div>
      </div>

      {/* Unequal Span Grid */}
      <h3 className='text-xl font-medium my-3 text-center bg-blend-color-dodge'>Unequal Span Grid</h3>
      <div className='grid grid-cols-12 grid-rows-2 gap-4 m-6 p-4 bg-bright-green-100'>
        <div className='bg-bright-green-200 m-1 p-2 text-center col-span-5'> First </div>
        <div className='bg-bright-green-200 m-1 p-2 text-center col-span-5'> Second </div>
        <div className='bg-bright-green-200 m-1 p-2 text-center col-span-2'> Third </div>
        <div className='bg-bright-green-200 m-2 p-2 sm:col-start-1 row-start-2 text-center col-span-12'> Fourth </div>
      </div>

      {/* Mobile View /Responsive Design */}
      <h3 className='text-2xl font-semibold my-4'>Mobile View / Responsive Design</h3>
      <div className='bg-waikawa-gray-100 m-6 p-4 grid lg:grid-cols-3 sm:grid-rows-3 md:grid-rows-3'>
        <div className='bg-waikawa-gray-200 m-2 p-2 text-center'>Item 1</div>
        <div className='bg-waikawa-gray-200 m-2 p-2 text-center'>Item 2</div>
        <div className='bg-waikawa-gray-200 m-2 p-2 text-center'>Item 3</div>
      </div>
    </>
  )
}

export default App

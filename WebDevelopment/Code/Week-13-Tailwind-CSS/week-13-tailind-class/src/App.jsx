import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-300 underline bold items-center text-center text-6xl font-mono font-weight: 800;'>
        Flex and Grid in Taliwind CSS
      </h1>

      {/* Flex  */}

      <div className=" m-4 p-3 bg-gray-100 rounded-md">
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



      {/* Grid */}

      {/* Equal Span Grid */}
      <div className='grid grid-cols-3 grid-rows-2 m-12 p-4 bg-fuchsia-100'>
        <div className='bg-fuchsia-200 m-2 p-2'> First </div>
        <div className='bg-fuchsia-200 m-2 p-2'> Second </div>
        <div className='bg-fuchsia-200 m-2 p-2'> Third </div>
        <div className='bg-fuchsia-200 m-2 p-2 col-start-2 row-start-2 text-center'> Fourth </div>
      </div>
      {/* Unequal Span Grid*/}

    </>
  )
}

export default App

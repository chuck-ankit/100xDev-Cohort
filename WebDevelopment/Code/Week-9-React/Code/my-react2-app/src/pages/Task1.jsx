import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function incrementCounter(){
        setCount(count + 1);
    }
    function decrementCounter(){
        
            setCount(count - 1);
        
    }
    return (
        <div>
            <h1 className="font-bold text-2xl ">Counter: {count}</h1>
            <button onClick={incrementCounter} className="bg-green-400 cursor-pointer rounded-lg text-xl m-4 font-semibold p-4">Increment</button>
            <button onClick={decrementCounter} className="bg-red-400 cursor-pointer rounded-lg text-xl m-4 font-semibold p-4">Decrement</button>
            <button onClick={() => setCount(0)} className="bg-cyan-400 cursor-pointer rounded-lg text-xl m-4 font-semibold p-4">Reset</button>
        </div>
    );
        
}
function Task1() {
    return (
        <div className="min-h-screen bg-gradient-to-br bg-red-orange-50 flex flex-col">
            {/* Heading Section */}
            <header className="w-full py-6 text-center bg-inherit">
                <h1 className="font-bold text-3xl text-red-500">Task 1 Page</h1>
            </header>

            {/* Content Section */}
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
                    <div className="space-y-3 text-center">
                        <Counter></Counter>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Task1;

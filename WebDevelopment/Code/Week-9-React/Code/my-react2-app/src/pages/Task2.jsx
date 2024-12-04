import React, { useEffect, useState, useRef } from "react";

// Mounting, Re-rendering, and Unmounting
function Counter() {
    // State to track the counter value
    const [count, setCount] = useState(0); // Initialized to 0

    // Ref to store the latest value of count without triggering re-renders
    const countRef = useRef(count);

    // Sync the ref with the current count state on each render
    useEffect(() => {
        countRef.current = count;
    }, [count]);// Dependency array 

    // Hooking into the lifecycle events of React
    useEffect(() => {
        // Set up the interval to increment the counter every second
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1); // Use functional update to get the latest value
        }, 1000);

        console.log("Mounted");

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(interval); // Prevent memory leaks
            console.log("Unmounted");
        };
    }, []); // Empty dependency array ensures this runs only once after mounting

    // Function to reset the counter
    function resetCounter() {
        setCount(0); // Reset count to 0
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Counter: {count}</h1>
            <button
                onClick={resetCounter}
                className="bg-cyan-400 cursor-pointer rounded-lg text-xl m-4 font-semibold p-4"
            >
                Reset
            </button>
        </div>
    );
}

function Task2() {
    return (
        let counterVisible = true; 
        <div className="min-h-screen bg-gradient-to-br bg-red-orange-50 flex flex-col">
            {/* Heading Section */}
            <header className="w-full py-6 text-center bg-inherit">
                <h1 className="font-bold text-3xl text-red-500">Task 1 Page</h1>
            </header>

            {/* Content Section */}
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
                    <div className="space-y-3 text-center">
                        {counterVisible ? <Counter></Counter>: null}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Task2;

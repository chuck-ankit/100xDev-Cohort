import React from "react";

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-orange-50 to-red-orange-100 p-6">
            {/* Page Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-red-orange-600">React Basics</h1>
                <p className="text-xl text-red-orange-500 mt-2">Understanding React concepts with practical examples</p>
            </header>

            {/* Content Sections */}
            <main className="space-y-8">
                {/* Section: Components */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Components</h2>
                    <p className="text-red-orange-700 mt-2">
                        Components are the building blocks of a React application. They allow you to break down the UI into reusable, independent pieces. Components can be <strong>functional</strong> or <strong>class-based</strong>.
                    </p>
                </section>

                {/* Section: State */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">State</h2>
                    <p className="text-red-orange-700 mt-2">
                        State is a built-in React object used to store data about a component. It allows React to update the UI dynamically based on user interactions or other factors.
                    </p>
                </section>

                {/* Section: Hooks */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Hooks</h2>
                    <p className="text-red-orange-700 mt-2">
                        Hooks, such as <code>useState</code> and <code>useEffect</code>, let you use state and lifecycle methods in functional components. They simplify React code by removing the need for class components.
                    </p>
                </section>

                {/* Section: Mounting, Re-rendering, and Unmounting */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Mounting, Re-rendering, and Unmounting</h2>
                    <p className="text-red-orange-700 mt-2">
                        React lifecycle phases:
                        <ul className="list-disc list-inside mt-2">
                            <li><b>Mounting:</b> Component is added to the DOM.</li>
                            <li><b>Re-rendering:</b> Component updates due to state/prop changes.</li>
                            <li><b>Unmounting:</b> Component is removed from the DOM.</li>
                        </ul>
                    </p>
                </section>

                {/* Section: Dependency Array in useEffect */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Dependency Array in useEffect</h2>
                    <p className="text-red-orange-700 mt-2">
                        The dependency array in <code>useEffect</code> determines when the effect should re-run. It includes variables that the effect depends on. If any of these dependencies change, the effect is re-executed.
                    </p>
                    <p className="text-red-orange-700 mt-2">
                        <strong>Common Errors:</strong>
                        <ul className="list-disc list-inside">
                            <li>Omitting dependencies can cause inconsistent behavior.</li>
                            <li>Leaving the array empty skips dependencies but risks infinite loops if the effect modifies state it depends on.</li>
                        </ul>
                    </p>
                </section>

                {/* Section: useEffect */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">useEffect</h2>
                    <p className="text-red-orange-700 mt-2">
                        <code>useEffect</code> lets you perform side effects like data fetching, setting up subscriptions, or managing timers. It can also clean up resources during the unmounting phase.
                    </p>
                </section>

                {/* Section: Cleanup in useEffect */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Cleanup in useEffect</h2>
                    <p className="text-red-orange-700 mt-2">
                        Cleanup is a function returned from the effect to clean up resources when the component unmounts or before the effect re-runs. It prevents memory leaks, stops background tasks, and ensures predictable behavior during updates.
                    </p>
                </section>

                {/* Section: Fetching Data with useEffect */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Fetching Data with useEffect</h2>
                    <p className="text-red-orange-700 mt-2">
                        Use <code>useEffect</code> to fetch data when a component mounts. It ensures the fetch logic runs only on initial render or when dependencies change.
                    </p>
                    <p className="text-red-orange-700 mt-2">
                        <b>Example:</b>
                        <pre className="bg-gray-100 p-4 rounded">
                            <code>
                                useEffect(() =&gt; &#123;{"\n"}
                                &nbsp;&nbsp;const fetchData = async () =&gt; &#123;{"\n"}
                                &nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch("https://api.example.com/data");{"\n"}
                                &nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();{"\n"}
                                &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);{"\n"}
                                &nbsp;&nbsp;&#125;;{"\n"}
                                &nbsp;&nbsp;fetchData();{"\n"}
                                &#125;, []);{"\n"}
                            </code>
                        </pre>
                    </p>
                </section>

                {/* Section: Closures in setInterval */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">Closures in setInterval</h2>
                    <p className="text-red-orange-700 mt-2">
                        JavaScript closures cause <code>setInterval</code> to capture the state value at the time of its creation. To ensure it uses the latest state, use a functional update or <code>useRef</code>.
                    </p>
                </section>

                {/* Section: BrowserRouter */}
                <section className="bg-white shadow-lg rounded-lg p-6 border border-red-orange-200">
                    <h2 className="text-2xl font-semibold text-red-orange-600">BrowserRouter</h2>
                    <p className="text-red-orange-700 mt-2">
                        <code>BrowserRouter</code> is a React Router component that enables navigation in a single-page app. It uses the browser's History API to manage routing without refreshing the page.
                    </p>
                </section>

                {/* Section: Error Note */}
                <section className="bg-red-orange-50 shadow-lg rounded-lg p-6 border border-red-orange-300">
                    <h2 className="text-2xl font-semibold text-red-orange-700">Error Note</h2>
                    <p className="text-red-orange-800 mt-2">
                        The counter issue occurred because <code>setInterval</code> captured the initial state value, causing it to behave incorrectly. The solution was to use the functional update form of <code>setState</code> or synchronize the state with a <code>useRef</code>.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="text-center mt-12">
                <p className="text-red-orange-600 text-sm">
                    © {new Date().getFullYear()} React Basics Tutorial
                </p>
            </footer>
        </div>
    );
}

export default HomePage;

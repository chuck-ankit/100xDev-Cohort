import { Link } from "react-router-dom";

function Navbar({ token, logout }) {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Auth App</h1>
      <div>
        <Link to="/" className="px-3">Home</Link>
        {!token ? (
          <>
            <Link to="/signin" className="px-3">Sign In</Link>
            <Link to="/signup" className="px-3">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="px-3">Profile</Link>
            <button onClick={logout} className="ml-3 bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

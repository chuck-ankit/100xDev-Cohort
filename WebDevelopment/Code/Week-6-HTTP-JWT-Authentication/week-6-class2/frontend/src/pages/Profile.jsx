import { useState, useEffect } from "react";
import axios from "axios";

function Profile({ logout }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("/me")
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Profile fetch error:", err);
        setError("Failed to load profile data");
        setLoading(false);
        // Only logout if it's an authentication error
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          logout();
        }
      });
  }, [logout]);

  if (loading) return <div className="bg-white p-6 rounded-lg shadow-md w-80">Loading...</div>;
  if (error) return <div className="bg-white p-6 rounded-lg shadow-md w-80 text-red-500">{error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <h2 className="text-xl font-bold">Profile</h2>
      {user && (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Status:</strong> {user.message || "Authenticated"}</p>
          <button onClick={logout} className="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
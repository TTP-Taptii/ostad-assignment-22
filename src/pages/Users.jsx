import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="page"><p className="container">Loading users...</p></div>;
  if (error) return <div className="page"><p className="container error">{error}</p></div>;

  return (
    <div className="page">
      <div className="container">
        <h1>Users</h1>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <Link to={`/users/${user.id}`} className="details-link">View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;

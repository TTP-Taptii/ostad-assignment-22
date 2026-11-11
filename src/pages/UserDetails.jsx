import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="page">
      <div className="container">
        <div className="card">
          <h1>User Details</h1>
          <p>Selected User ID: <strong>{id}</strong></p>
          {user && user.name && (
            <>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </>
          )}
          <Link to="/users" className="details-link">← Back to Users</Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

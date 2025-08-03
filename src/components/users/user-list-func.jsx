import { useState, useEffect } from "react";

export default function UserListFunc() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      isAdmin: true,
      isDeleted: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      isAdmin: false,
      isDeleted: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      isAdmin: true,
      isDeleted: false,
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      isAdmin: false,
      isDeleted: true,
    },
  ]);
  const handleToggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  console.log("User List:", users);

  //didMount and didUpdate equivalent
  useEffect(() => {
    console.log("Did mount or update - User List:", users);
  }, [users]);

  //didUnmount equivalent
  useEffect(() => {
    return () => {
      console.log("Did unmount - User List:", users);
    };
  }, []);

  //didMount equivalent
  useEffect(() => {
    console.log("Did mount ");
  }, []);
  return (
    <>
      {isAuthenticated && (
        <div>
          <h2>User List</h2>
          <ul>
            {users.map((user) => {
              if (!user.isDeleted) {
                return (
                  <li key={user.id}>
                    {user.name} - {user.email}{" "}
                    {user.isAdmin ? (
                      <span className="badge bg-success ms-2">Admin</span>
                    ) : (
                      <span className="badge bg-secondary ms-2">User</span>
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}

      {!isAuthenticated && (
        <div>
          <h2>Please log in to view the user list.</h2>
        </div>
      )}

      <button onClick={handleToggleAuth} className="btn btn-primary mt-3">
        Toggle Authentication
      </button>
    </>
  );
}

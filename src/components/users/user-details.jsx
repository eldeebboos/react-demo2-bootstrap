import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);

  // in mount component Fetch user details based on the ID from the URL
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log("Fetched User Details:", data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>User Details</h2>
      <p>User ID: {id}</p>
      {user && (
        <div>
          <p>
            Name: {user.name.firstname} {user.name.lastname}
          </p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

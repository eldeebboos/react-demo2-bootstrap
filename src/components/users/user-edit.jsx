import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../axios-config/axios-config";
export default function UserEdit() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log("Fetched User Details:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [id]);

  // Function to handle form submission for editing user details
  const handleEditUser = (event) => {
    event.preventDefault();
    axiosInstance
      .put(`/users/${id}`, user)
      .then((response) => {
        console.log("User updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div>
      <h2>UserEdit {user && "#" + user.id}</h2>
      {user && (
        <>
          <form onSubmit={handleEditUser}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name.firstname}
                name="firstname"
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: { ...user.name, firstname: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name.lastname}
                name="lastname"
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: { ...user.name, lastname: e.target.value },
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={user.username}
                name="username"
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={user.email}
                name="email"
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <Link to={"/user-list1"} className="btn btn-secondary ms-2">
              Back to User List
            </Link>
          </form>
        </>
      )}
    </div>
  );
}

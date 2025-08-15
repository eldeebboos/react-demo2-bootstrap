import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios-config/axios-config";
import Loader from "../../shared/components/loader";
import { useSelector } from "react-redux";

const UserListFunc = (props) => {
  const language = useSelector((state) => state.lang.lang);
  const loading = useSelector((state) => state.loading.loading);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john@example.com",
  //     isAdmin: true,
  //     isDeleted: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     isAdmin: false,
  //     isDeleted: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Alice Johnson",
  //     email: "alice@example.com",
  //     isAdmin: true,
  //     isDeleted: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Bob Brown",
  //     email: "bob@example.com",
  //     isAdmin: false,
  //     isDeleted: true,
  //   },
  // ]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/users", {
        params: {
          api_key: "ascvgd3rdgbsdbtr4dvbsdvds",
          limit: 5,
          page: 1,
          query: "search",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setUsers(data);
        console.log("Fetched Users:", data);
      });
  }, []);

  //delete user
  const deleteUser = (id) => {
    axiosInstance.delete(`/users/${id}`).then((data) => {
      console.log("User deleted successfully:", data);

      setUsers(users.filter((user) => user.id !== id));
      console.log("Deleted User ID:", id);
    });
  };

  const handleToggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

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

  const navigate = useNavigate();
  const addNewUser = () => {
    navigate("/add-user");
  };
  return (
    <>
      {loading && <Loader />}
      {language}
      {isAuthenticated && (
        <div>
          <h2>User List</h2>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={() => addNewUser()}>
              Add User
            </button>
          </div>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="btn btn-info ms-2"
                        to={"/user-details/" + user.id}
                      >
                        View Details
                      </Link>
                      <Link
                        className="btn btn-success ms-2"
                        to={"/user-edit/" + user.id}
                      >
                        Edit User
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
};

export default UserListFunc;

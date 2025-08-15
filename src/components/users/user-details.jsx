import React, { useEffect } from "react";
import Loader from "../../shared/components/loader";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios-config/axios-config";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);
  const loading = useSelector((state) => state.loading.loading);

  // in mount component Fetch user details based on the ID from the URL
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
  }, []);

  return (
    <>
      {loading && <Loader />}
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
    </>
  );
}

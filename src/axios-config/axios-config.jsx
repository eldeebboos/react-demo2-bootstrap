import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // Set a timeout for requests
});

export default axiosInstance;

import axios from "axios";
import store from "../store/store";
import changeLoading from "../store/actions/loading";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
  // timeout: 10000, // Set a timeout for requests
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //     config.params = {
    //       api_key: "zscjnaskhdbchas",
    //     };

    //loading spinner
    store.dispatch(changeLoading(true));

    config.headers = {
      "content-type": "application/json",
      token: "sdcsCjsncjncbhhsdbgqahqbsh",
    };
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("Error occures while requesting: ", error);
    store.dispatch(changeLoading(false));

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(changeLoading(false));
    return response;
  },
  (error) => {
    console.log("Error occures while requesting: ", error);
    store.dispatch(changeLoading(false));
    return Promise.reject(error);
  }
);

export default axiosInstance;

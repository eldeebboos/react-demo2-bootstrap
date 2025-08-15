import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Loader from "./shared/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Use the redux and store to kep and manage the state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

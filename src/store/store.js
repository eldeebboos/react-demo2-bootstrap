import { createStore } from "redux";
import combineReducers from "./combineReducer";

const store = createStore(
  combineReducers
  //   composeWithDevTools(applyMiddleware())
);

export default store;

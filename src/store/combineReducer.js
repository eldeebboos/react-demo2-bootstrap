import { combineReducers } from "redux";
import languageReducer from "./reducers/langauge";
import loadingReducer from "./reducers/loading";

export default combineReducers({
  lang: languageReducer,
  loading: loadingReducer,
});

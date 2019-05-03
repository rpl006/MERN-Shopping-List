import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import authReducer from "./autheReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
});

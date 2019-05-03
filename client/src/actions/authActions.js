import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//Check Token and load user
export const loadUser = () => (dispatch, getState) => {
  //USer Loading
  dispatch({ type: USER_LOADING });

  //Fetch User
  axios
    .get("/api/auth/user", tokenConfig)
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Setup Config Headers and Token

export const tokenConfig = getState => {
  //Get Token from localstorage

  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

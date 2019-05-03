import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
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

//Register User
export const register = ({ name, email, password }) => dispatch => {
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //Request Body
  const body = JSON.stringify({ name, email, password });
  axios
    .post("/api/users", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
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

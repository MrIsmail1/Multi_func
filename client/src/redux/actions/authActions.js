import axios from "axios";
import { ERRORS } from "../types";
import jwt_decode from "jwt-decode";

export const Registration = (form, navigate) => (dispatch) => {
  axios
    .post("/api/register", form)
    .then(() => {
      navigate('/login');
      dispatch({
        type: ERRORS,
        payload: {},
      });
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};
export const LoginAction = (form, navigate) => (dispatch) => {
  axios
    .post("/api/login", form)
    .then((res) => {
     const {token} = res.data;
     localStorage.setItem("jwt")
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      });
    });
};

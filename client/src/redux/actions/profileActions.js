import axios from "axios";
import { DELETE_PROFILE, ERRORS, GET_PROFILES } from "../types";
import { SET_PROFILE } from "./../types";
export const AddProfile = (form, setAlert, setMessage) => (dispatch) => {
  axios
    .post("/api/profiles", form)
    .then((res) => {
      setAlert(true);
      setMessage("Profile updated successfully");
      dispatch({
        type: ERRORS,
        payload: {},
      });
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    })
    .catch((err) =>
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      })
    );
};

export const GetProfile = () => (dispatch) => {
  axios
    .get("/api/profile")
    .then((res) => {
      dispatch({
        type: SET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      })
    );
};
export const GetProfiles = () => (dispatch) => {
  axios
    .get("/api/profiles")
    .then((res) => {
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      })
    );
};
export const DeleteProfile = (id) => (dispatch) => {
  if (window.confirm("Are you sure you want to delete this profile?")) {
    axios
      .delete(`/api/profiles/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_PROFILE,
          payload: id,
        });
      })
      .catch((err) =>
        dispatch({
          type: ERRORS,
          payload: err.response.data,
        })
      );
  }
};

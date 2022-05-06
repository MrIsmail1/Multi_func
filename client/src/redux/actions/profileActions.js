import { axios } from "axios";
import { ERRORS } from "../types";
export const AddProfile = (form) => (dispatch) => {
  axios
    .post("/api/profiles", form)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) =>
      dispatch({
        type: ERRORS,
        payload: err.response.data,
      })
    );
};

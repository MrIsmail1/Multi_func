import React, { useEffect, useState } from "react";
import { AddProfile, GetProfile } from "../redux/actions/profileActions";
import Inputs from "./../components/Inputs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Classnames from "classnames";

function Profile() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const profiles = useSelector((state) => state.profiles);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(AddProfile(form, setAlert, setMessage));
  };
  useEffect(() => {
    dispatch(GetProfile());
    setForm(profiles.profile);
  }, []);
  return (
    <div className="container p-4 mt-4">
      <div
        className="alert alert-success"
        role="alert"
        style={{ display: alert ? "block" : "none" }}
      >
        {message}
      </div>
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmitHandler}>
              <Inputs
                name="tel"
                label="Telephone"
                type="text"
                icon="fa-solid fa-phone"
                onChangeHandler={onChangeHandler}
                errors={errors.tel}
                value={form && form.tel ? form.tel : ""}
              />
              <Inputs
                name="country"
                label="Country"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.country}
                value={form && form.country ? form.country : ""}
              />
              <Inputs
                name="city"
                label="City"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.city}
                value={form && form.city ? form.city : ""}
              />
              <Inputs
                name="postalcode"
                label="Postal code"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.postalcode}
                value={form && form.postalcode ? form.postalcode : ""}
              />
              <div className=" mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <textarea
                    type="text"
                    className={Classnames("form-control", {
                      "is-invalid": errors.address,
                    })}
                    name="address"
                    onChange={onChangeHandler}
                    value={form && form.address ? form.address : ""}
                  ></textarea>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Update <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

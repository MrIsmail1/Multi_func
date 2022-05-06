import React, { useState } from "react";
import { AddProfile } from "../redux/actions/profileActions";
import Inputs from "./../components/Inputs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Classnames  from "classnames";

function Profile() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(AddProfile(form));
  };
  return (
    <div className="container p-4 mt-4">
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
              />
              <Inputs
                name="country"
                label="Country"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.country}
              />
              <Inputs
                name="city"
                label="City"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.city}
              />
              <Inputs
                name="postalcode"
                label="Postal code"
                type="text"
                onChangeHandler={onChangeHandler}
                errors={errors.postalcode}
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

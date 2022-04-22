import React from "react";

function Inputs({ name, label, type, icon, errors }) {
  return (
    <div className=" mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
        <input type={type} name={name} className="form-control" />
      </div>
    </div>
  );
}

export default Inputs;

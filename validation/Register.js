const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRegister(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm = !isEmpty(data.confirm) ? data.confirm : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
    /* isEmpty is from the package of the validator*/
  }
  if (!validator.isEmail(data.email)) {
    errors.Email = "Email format is Required ";
  }
  if (validator.isEmpty(data.email)) {
    errors.Email = "Email is Required ";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = "Passwords dont match";
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = "Password confirmation is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

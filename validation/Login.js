const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLogin(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email format is Required ";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is Required ";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

  data.tel = !isEmpty(data.tel) ? data.tel : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.postalcode = !isEmpty(data.postalcode) ? data.postalcode : "";

  if (validator.isEmpty(data.tel)) {
    errors.tel = "Phone is Required";
    /* isEmpty is from the package of the validator*/
  }
  if (validator.isEmpty(data.country)) {
    errors.country = "Country is Required ";
  }
  if (validator.isEmpty(data.city)) {
    errors.city = "City is required";
  } 
  if (validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }
  if (validator.isEmpty(data.postalcode)) {
    errors.postalcode = "Postal code is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

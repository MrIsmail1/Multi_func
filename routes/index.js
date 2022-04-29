var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/users.controllers");
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  DeleteProfile,
} = require("../controllers/profile.controllers");
var router = express.Router();

/* users routes*/
router.post("/register", Register);
router.post("/login", Login);

/*profile routes*/
/*adding new profile*/
router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  AddProfile
);
/* find all profiles*/
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  FindAllProfiles
);
/* single profile*/
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  FindSingleProfile
);
/* delete profile*/
router.delete(
  "/profiles/:id",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  DeleteProfile
);

module.exports = router;

const ProfileModel = require("../models/profiles.models");
const ValidateProfile = require("../validation/Profile");
const AddProfile = async (req, res) => {
  const { errors, isValid } = ValidateProfile(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      ProfileModel.findOne({ user: req.user.id }).then(async (profile) => {
        if (!profile) {
          req.body.user =
            req.user.id; /*recieve the id of the user from the passport*/
          await ProfileModel.create(req.body);
          res.status(200).json({ message: "Profile added successfully" });
        } else {
          await ProfileModel.findOneAndUpdate({ _id: profile._id }, req.body, {
            new: true,
          }).then((result) => {
            res.status(200).json(result);
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const FindAllProfiles = async (req, res) => {
  try {
     const data = await ProfileModel.find().populate('user',["name","email","role"]) /* .populate to get the rest of the user informations */ 
     res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const FindSingleProfile = async (req, res) => {
  try {
      const data = await ProfileModel.findOne({user : req.user.id})
      res.status(200).json(data);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};
const DeleteProfile = async (req, res) => {
  try {
      await ProfileModel.findOneAndRemove({_id: req.params.id})
      .then(res.status(200).json({ message:"User profile deleted successfully"}))
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  DeleteProfile,
};

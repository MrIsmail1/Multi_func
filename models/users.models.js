const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    name: "string",
    email: {
      type: "string",
      trim: true /*removes spaces automatically*/,
      unique: true,
    },
    password: "string",
    role: "string",
  },
  {
    timestamp: true /*the timestamp of actions which occured in the db */,
  }
);
module.exports = mongoose.model("users", UserModel);

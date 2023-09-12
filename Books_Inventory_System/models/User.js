const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "please provide username"],
      minLength: [6, "username minimum 6 characters required"],
      maxLength: [15, "username must be upto 15 characters"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "please provide name"],
      minLength: [6, "name minimum 6 characters required"],
      maxLength: [30, "name must be upto 30 characters"],
    },
    email: {
      type: String,
      required: [true, "please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minLength: [8, "password minimum 8 characters required"],
    },
    contactNumber: {
      type: String,
      required: [true, "please provide contact number"],
      minLength: [10, "contact number minimum 10 characters required"],
      maxLength: [15, "contact number must be upto 15 characters"],
    },
    address: {
      type: String,
      required: [true, "please provide your current address"],
      maxLength: [60, "address must be upto 60 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "librarian", "regular"],
        message: `{VALUE} is not supported`,
      },
      default: "regular",
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "approved", "declined", "blocked"],
        message: `{VALUE} is not supported`,
      },
      default: "pending",
    },
    profilePicture: String,
  },
  { timestamps: true, id: true }
);

const User = model("User", userSchema);

module.exports = { User };

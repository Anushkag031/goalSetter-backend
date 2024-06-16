const jwt=require('jsonwebtoken')
const bycrypt=require('bcryptjs')
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel')

//@desc register user
//@ route Get /api/users
//@access public
const registerUser = asyncHandler( async(req, res) => {
  res.json({ message: "User registered" });
});

//@desc authentication of user
//@ route POST /api/users/login
//@access public
const loginUser =asyncHandler( async(req, res) => {
  res.json({ message: "User login" });
});

//@desc get the user profile
//@ route Get /api/users/me
//@access public
const getMe =asyncHandler( async(req, res) => {
  res.json({ message: "User profile" });
});

module.exports = {
  registerUser,
  getMe,
  loginUser,
};

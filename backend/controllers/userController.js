const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc register user
//@ route Get /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  //check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);

    throw new Error("User already exists");
  }

  //is hash the password
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt); //hash the password using the salt

  const user = await User.create({ //create a new user object with the hashed password
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }
  else
  {
    res.status(400);
    throw new Error('Invalid user data');
  }

  //create a token

});

//@desc authentication of user
//@ route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user already exists
  const user = await User.findOne({ email });

  if(user && (await bycrypt.compare(password, user.password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            //token: null
        })
    }
    else
    {
        res.status(401);
        throw new Error('Invalid email or password');
    }

  
});

//@desc get the user profile
//@ route Get /api/users/me
//@access public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User profile" });
});

module.exports = {
  registerUser,
  getMe,
  loginUser,
};

//@desc register user
//@ route Get /api/users
//@access public
const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

//@desc authentication of user
//@ route POST /api/users/login
//@access public
const loginUser = (req, res) => {
  res.json({ message: "User login" });
};

//@desc get the user profile
//@ route Get /api/users/me
//@access public
const getMe = (req, res) => {
  res.json({ message: "User profile" });
};

module.exports = {
  registerUser,
  getMe,
  loginUser,
};

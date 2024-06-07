const asyncHandler = require("express-async-handler");
//@desc get goals from db
//@ route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get goals" }); //will show in postman
  }) ;

//@desc set goals from db
//@ route POST /api/goals
//@access Private
const setGoals = asyncHandler( async(req, res) => {
  if (!req.body.text) {
    res.status(400) //will show in postman
    throw new Error('Please provide a text message in the request');
  }
  res.status(200).json({ message: "Set goals" }); //will show in postman
});

//@desc Update goals from db
//@ route PUT /api/goals
//@access Private
const updateGoals =asyncHandler( async(req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` }); // passing the id
});

//@desc delete goals from db
//@ route delete /api/goals
//@access Private
const deleteGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` }); //will show in postman
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

const asyncHandler = require("express-async-handler");


const Goal = require('../models/goalModel');
const User = require("../models/userModel");





//@desc get goals from db
//@ route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {

    const goals= await Goal.find({ user: req.user.id})
    res.status(200).json(goals); //will show in postman
  }) ;

//@desc set goals from db
//@ route POST /api/goals
//@access Private
const setGoals = asyncHandler( async(req, res) => {
  if (!req.body.text) {
    res.status(400) //will show in postman
    throw new Error('Please provide a text message in the request');
  }


  const goal=await Goal.create({
    text: req.body.text,
    user: req.user.id
  })
  res.status(200).json(goal); //will show in postman
});
//@desc Update goals from db
//@ route PUT /api/goals
//@access Private



const updateGoals =asyncHandler( async(req, res) => {

    const goal= await Goal.findById(req.params.id); //passing the id

    if(!goal){
        res.status(404)
        throw new Error('Goal not found');
        }

        const user=await User.findById(req.user.id); //passing the id
        if(!user){
            res.status(404)
            throw new Error('User not found');
        }
//make sure user owns the goal, logged in user is  the owner of the goal
        if(goal.user.toString() !== user.id){
            res.status(401)
            throw new Error('User not authorized');
        }

        const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body, { //id of the goal, body of the request
            new: true, //true if the goal is updated
            runValidators: true //true if the goal is updated
        });

  res.status(200).json(goal); // passing the id
});

//@desc delete goals from db
//@ route delete /api/goals
//@access Private
const deleteGoals = asyncHandler(async(req, res) => {

    const goal= await Goal.findById(req.params.id); //passing the id

    if(!goal){
        res.status(404)
        throw new Error('Goal not found');
        }
        const user=await User.findById(req.user.id); //passing the id
        if(!user){
            res.status(404)
            throw new Error('User not found');
        }
//make sure user owns the goal, logged in user is  the owner of the goal
        if(goal.user.toString() !== user.id){
            res.status(401)
        }

        await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id:req.params.id }); //will show in postman
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

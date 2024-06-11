const asyncHandler = require("express-async-handler");


const Goal = require('../models/goalModel');





//@desc get goals from db
//@ route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {

    const goals= await Goal.find()
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
    text: req.body.text
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

        await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id:req.params.id }); //will show in postman
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

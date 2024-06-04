//@desc get goals from db
//@ route Get /api/goals
//@access Private
const getGoals = (req,res ) => {
    res.status(200).json({ message:'Get goals' }); //will show in postman
}

//@desc set goals from db
//@ route POST /api/goals
//@access Private
const setGoals = (req,res ) => {
    res.status(200).json({ message:'Set goals' }); //will show in postman
}

//@desc Update goals from db
//@ route PUT /api/goals
//@access Private
const updateGoals = (req,res ) => {
    res.status(200).json({ message:`Update goal ${req.params.id}` }); // passing the id
}

//@desc delete goals from db
//@ route delete /api/goals
//@access Private
const deleteGoals = (req,res ) => {
    res.status(200).json({ message:`Delete goal ${req.params.id}` }); //will show in postman
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}
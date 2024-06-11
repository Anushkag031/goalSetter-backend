//schema for fields that are required for goal

const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

//define the schema for the goal
const goalSchema = mongoose.Schema(
  {
    user: { 
        type: mongoose.Schema.Types.ObjectId, //when we create a goal, we want to know which user created it
        required: true, 
        ref: "User" //which user created the goal
    },
    text: {
      type: String,
      required: [true, "Please enter a goal"],
    },
  },
  {
    timestamps: true, // default timestamps
  }
);

module.exports = mongoose.model("Goal", goalSchema); //export the model

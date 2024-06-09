//schema for fields that are required for goal

const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

//define the schema for the goal
const goalSchema = mongoose.Schema(
  {
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

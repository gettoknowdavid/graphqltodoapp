const { GraphQLDateTime } = require("graphql-iso-date");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  item: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  isComplete: {
    type: Boolean,
    trim: true,
  },
  addedDate: {
    type: Date,
    default: Date.now(),
    trim: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };

import { timeStamp } from "console";
import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Add a Title"],
    trim: true,
    maxLength: [255, "The Title Can't be More than 255 Characters"],
  },
//   description: {
//     type: String,
//     required: [true, "Please Add a description"],
//     trim: true,
//   },

  complete: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)
export default Todo

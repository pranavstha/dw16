import { Schema } from "mongoose";

let studentSchema = Schema({
  name: {
    type: String,
    required: [true, "name fielsd is required"],
  },
  age: {
    type: Number,
    required: [true, "age feild is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },
});

export default studentSchema;

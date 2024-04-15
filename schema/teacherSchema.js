import { Schema } from "mongoose";

let teacherSchema = Schema({
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
    subject:{
        type: String,
        required: [true, "name fielsd is required"],
      }
});

export default teacherSchema;
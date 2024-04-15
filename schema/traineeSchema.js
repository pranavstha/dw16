import { Schema } from "mongoose";

let traineeSchema = Schema({
    name: {
        type: String,
        required: [true, "name field is required"],
    },
    class: {
        type: String,
        required: [true, "class feild is required"],
    },
    faculty: {
        type: String,
        required: [true, "facaulty field is required"],
    },
});

export default traineeSchema;
import { Schema } from "mongoose";

let bookSchema = Schema({
    name: {
        type: String,
        required: [true, "name fielsd is required"],
    },
    author: {
        type: String,
        required: [true, "author feild is required"],
    },
    price: {
        type: Number,
        required: [true, "price field is required"],
    },
    isAvailable:{
        type: Boolean,
        required: [true, "isAvailable field is required"],
      }
});

export default bookSchema;
import { Schema } from "mongoose";

let reviewSchema = Schema({
    productId: {
        // type: String,
        type: Schema.ObjectId,
        ref: "Product",
        required: true
      },
      userId: {
        // type: String,
        type: Schema.ObjectId,
        ref: "User",
        required: true
      },
      description: {
        type: String,
        required: true
      }
});

export default reviewSchema;

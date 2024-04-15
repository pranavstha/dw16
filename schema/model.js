import { model } from "mongoose";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import bookSchema from "./bookSchema.js";
import traineeSchema from "./traineeSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import collegeSchema from "./collegeSchema.js";
import userSchema from "./userSchema.js";
import webUserSchema from "./webUserSchema.js";


export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Book = model("Book", bookSchema);
export let Trainee = model("Trainee", traineeSchema);
export let Product = model("Product", productSchema);
export let Review = model("Review", reviewSchema);
export let College = model("College", collegeSchema);
export let User = model("User", userSchema);
export let WebUser = model("WebUser", webUserSchema);

/*
variable name must be same as the models name
the first letter of the model's name must be of capital
model name must be singular
*/

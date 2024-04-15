import { Router } from "express";
import { Student } from "../schema/model.js";
import { createStudentController, deleteStudentController, readSpecificStudentController, readStudentController, updateStudentController } from "../controller/studentController.js";

let studentRouter = Router();

studentRouter
.route("/")
.post(createStudentController)
.get(readStudentController);

studentRouter
.route("/:id")
.get(readSpecificStudentController)
.patch(updateStudentController)
.delete(deleteStudentController)

export default studentRouter;
import { Router } from "express";
import { Teacher } from "../schema/model.js";
import { createTeacherController, deleteTeacherController, readSpecificTeacherController, readTeacherController, updateTeacherController } from "../controller/teacherController.js";

let teacherRouter = Router();

teacherRouter
    .route("/")
    .post(createTeacherController)
    .get(readTeacherController);

teacherRouter
    .route("/:id")
    .get(readSpecificTeacherController)
    .patch(updateTeacherController)
    .delete(deleteTeacherController);

export default teacherRouter;

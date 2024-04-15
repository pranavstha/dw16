import { Router } from "express";
import { Trainee } from "../schema/model.js";
import { createTraineeController, deleteTraineeController, readSpecificTraineeController, readTraineeController, updateTraineeController } from "../controller/traineeController.js";

let traineeRouter = Router();

traineeRouter
    .route("/")
    .post(createTraineeController)
    .get(readTraineeController);

traineeRouter
    .route("/:id")
    .get(readSpecificTraineeController)
    .patch(updateTraineeController)
    .delete(deleteTraineeController);

export default traineeRouter;

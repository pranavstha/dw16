import { Router } from "express";
import { Book } from "../schema/model.js";
import { createBookController, deleteBookController, readSpecificBookController, readBookController, updateBookController } from "../controller/bookController.js";

let bookRouter = Router();

bookRouter
    .route("/")
    .post(createBookController)
    .get(readBookController);

bookRouter
    .route("/:id")
    .get(readSpecificBookController)
    .patch(updateBookController)
    .delete(deleteBookController);

export default bookRouter;

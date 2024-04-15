import { Router } from "express";
import { User } from "../schema/model.js";
import { createUserController, deleteUserController, readSpecificUserController, readUserController, updateUserController } from "../controller/userController.js";
import userValidation from "../middleware/userValidation.js";
import validation from "../middleware/validation.js";

let userRouter = Router();


userRouter
  .route("/")
  .post(validation(userValidation),createUserController)
  .get(readUserController);

userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRouter;

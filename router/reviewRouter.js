import { Router } from "express";
import { Review } from "../schema/model.js";
import { createReviewController, deleteReviewController, readSpecificReviewController, readReviewController, updateReviewController } from "../controller/reviewController.js";

let reviewRouter = Router();

reviewRouter
  .route("/")
  .post(createReviewController)
  .get(readReviewController);

reviewRouter
  .route("/:id")
  .get(readSpecificReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController);

export default reviewRouter;

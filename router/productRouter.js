import { Router } from "express";
import { Product } from "../schema/model.js";
import { createProductController, deleteProductController, readSpecificProductController, readProductController, updateProductController } from "../controller/productController.js";

let productRouter = Router();

productRouter
  .route("/")
  .post(createProductController)
  .get(readProductController);

productRouter
  .route("/:id")
  .get(readSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRouter;

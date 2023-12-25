import ProductController from "@controllers/v1/products";
import express from "express";

const ProductRouter = express.Router();

ProductRouter.post("/", ProductController.create);
ProductRouter.put("/:id", ProductController.update);
ProductRouter.get("/", ProductController.getAll);
ProductRouter.get("/:id", ProductController.getSingle)
ProductRouter.delete("/:id", ProductController.deleteSingle);

export default ProductRouter;

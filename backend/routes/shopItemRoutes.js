import express from "express";
import {
  addshopitem,
  listitem,
  removeitem,
  getSingleItem,
} from "../controllers/shopitemcontroller.js";

const ShopitemRouter = express.Router();
// image storage

ShopitemRouter.post("/add", addshopitem);
ShopitemRouter.get("/list", listitem);
ShopitemRouter.post("/remove", removeitem);
ShopitemRouter.get("/:id", getSingleItem);
export default ShopitemRouter;

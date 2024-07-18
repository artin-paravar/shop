import express from "express";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  getCart,
  removeitem,
} from "../controllers/cartcontroller.js";
import authMiddleWare from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, increaseCartQuantity);
cartRouter.post("/remove", authMiddleWare, decreaseCartQuantity);
cartRouter.post("/get", authMiddleWare, getCart);
cartRouter.post("/removeItem", authMiddleWare, removeitem);

export default cartRouter;

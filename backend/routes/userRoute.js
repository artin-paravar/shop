import express from "express";
import { loginUser, singupUser } from "../controllers/usercontrollers.js";

const userRouter = express.Router();

userRouter.post("/signup", singupUser);
userRouter.post("/login", loginUser);

export default userRouter;

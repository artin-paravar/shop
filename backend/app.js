import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import shopitemRouter from "./routes/shopItemRoutes.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
//app config
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());

//mongoose connected
connectDB();

//api endpoints
app.use("/api/shopitem", shopitemRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.get("/", (req, res) => {
  res.json("ready");
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
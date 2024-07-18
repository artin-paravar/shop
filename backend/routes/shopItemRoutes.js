import express from "express";
import {
  addshopitem,
  listitem,
  removeitem,
  getSingleItem,
} from "../controllers/shopitemcontroller.js";
import multer from "multer";

const ShopitemRouter = express.Router();
// image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

ShopitemRouter.post("/add", upload.single("image"), addshopitem);
ShopitemRouter.get("/list", listitem);
ShopitemRouter.post("/remove", removeitem);
ShopitemRouter.get("/:id", getSingleItem);
export default ShopitemRouter;

import mongoose from "mongoose";
const ShopSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String, required: true },
});
const ShopItem =
  mongoose.models.shopitem || mongoose.model("shopitems", ShopSchema);
export default ShopItem;

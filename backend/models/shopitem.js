import mongoose from "mongoose";
const ShopSchema = mongoose.Schema({
  title: String,
  description: String,
  price: String,
  productImage: [],
  category: String,
  brand: String,
});
const ShopItem =
  mongoose.models.shopitem || mongoose.model("shopitems", ShopSchema);
export default ShopItem;

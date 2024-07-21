import ShopItem from "../models/shopitem.js";
import fs from "fs";

//add shop item
const addshopitem = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const item = new ShopItem({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await item.save();
    res.json({ success: true, message: "item added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//all shopitem
const listitem = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const search = req.query.search || "";
    let category = req.query.category || "All";

    const categoryOption = [
      "men's clothing",
      "jewelery",
      "electronics",
      "women's clothing",
    ];

    category === "All"
      ? (category = [...categoryOption])
      : (category = req.query.category.split(","));

    const items = await ShopItem.find({
      title: { $regex: search, $options: "i" },
    })
      .where("category")
      .in([...category])
      .skip(page * limit)
      .limit(limit);

    res.json(items);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
//remove shop item
const removeitem = async (req, res) => {
  try {
    const item = await ShopItem.findById(req.body.id);
    fs.unlink(`uploads/${item.image}`, () => {});
    await ShopItem.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "item removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
const getSingleItem = async (req, res) => {
  const id = req.params.id;
  const item = await ShopItem.findById(id);
  if (!item) {
    res.json({ success: false, message: "item not found" });
  }
  res.json({ success: true, item });
};
export { addshopitem, listitem, removeitem, getSingleItem };

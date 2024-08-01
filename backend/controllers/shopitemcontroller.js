import ShopItem from "../models/shopitem.js";
import fs from "fs";

//add shop item
const addshopitem = async (req, res) => {
  let image_filename = req.file.filename;
  const item = new ShopItem({
    title: req.body.title,
    description: req.body.description,
    price: Number(req.body.price),
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
    const { search } = req.query;
    let category = req.query.category || "All";

    const categoryOption = ["موبایل", "ساعت هوشمند", "اسپیکر", "کنسول بازی"];

    category === "All"
      ? (category = [...categoryOption])
      : (category = req.query.category.split(","));

    //search
    const title = new RegExp(search, "i");
    const AllItems = await ShopItem.find({});

    const items = await ShopItem.find({
      title: title,
    })
      .where("category")
      .in([...category])
      .skip(page * limit)
      .limit(limit);

    const categorymap = AllItems.map((item) => {
      return item.category;
    });

    const set = new Set([...categorymap]);
    const itemcategory = [...set];
    res.json({ items, itemcategory });
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

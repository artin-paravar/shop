import ShopItem from "../models/shopitem.js";
import fs from "fs";

//add shop item
const addshopitem = async (req, res) => {
  try {
    const uploadProduct = new ShopItem(req.body);
    const saveProduct = await uploadProduct.save();

    res.status(201).json({
      message: "Product upload successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

//all shopitem
const listitem = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const { search } = req.query;
    let category = req.query.category || "All";
    let brand = req.query.brand || "All";
    let brand2 = req.query.brand || "All";
    let sort = req.query.sort || "new";
    let max = req.query.max || 1000000000;
    let min = req.query.min || 0;
    //sort
    sort === "new"
      ? (sort = "title")
      : sort === "lowtohigh"
      ? (sort = "price")
      : (sort = "-price");

    const AllItems = await ShopItem.find({});
    const AllItems2 = await ShopItem.find({ category });

    //category All
    const categorymap = AllItems.map((item) => {
      return item.category;
    });

    const setCategory = new Set([...categorymap]);
    const itemcategory = [...setCategory];

    category === "All"
      ? (category = [...itemcategory])
      : (category = req.query.category.split(","));

    //Allbrand
    const Allbrandmap = AllItems.map((item) => {
      return item.brand;
    });

    const AllsetBrand = new Set([...Allbrandmap]);
    const Allitembrand = [...AllsetBrand];

    brand === "All"
      ? (brand = [...Allitembrand])
      : (brand = req.query.brand.trim().split(","));

    //Selectbrand
    const selectbrandmap = AllItems2.map((item) => {
      return item.brand;
    });

    const selectsetBrand = new Set([...selectbrandmap]);
    const selectitembrand = [...selectsetBrand];

    brand2 === "All"
      ? (brand2 = [...selectitembrand])
      : (brand2 = req.query.brand.trim().split(","));
    //search
    const title = new RegExp(search, "i");

    const items = await ShopItem.find({
      title: title,
      price: { $gte: min, $lte: max },
      category: {
        $in: category,
      },
      brand: {
        $in: brand,
      },
    })
      .sort(sort)
      .skip(page * limit)
      .limit(limit);

    const maxItem = Math.max(...items?.map((items) => items?.price));
    const minItem = Math.min(...items?.map((items) => items?.price));

    res.json({
      maxItem,
      minItem,
      items,
      selectitembrand,
      itemcategory,
      Allitembrand,
    });
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

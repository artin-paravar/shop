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

    const AllItems = await ShopItem.find({});
    const AllItems2 = await ShopItem.find({ category });
    // LowtoHigh
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const LowtoHigh = AllItems.slice().sort(
      (a, b) => parsePrice(a.price) - parsePrice(b.price)
    );

    // HightoLow
    const parsePrice2 = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const HightoLow = AllItems.slice().sort(
      (a, b) => parsePrice2(b.price) - parsePrice2(a.price)
    );

    // LowtoHigh
    const parsePrice3 = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const LowtoHighcategory = AllItems2.slice().sort(
      (a, b) => parsePrice3(a.price) - parsePrice3(b.price)
    );

    // HightoLow
    const parsePrice4 = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const HightoLowcategory = AllItems2.slice().sort(
      (a, b) => parsePrice4(b.price) - parsePrice4(a.price)
    );
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
    })
      .where("category")
      .in([...category])
      .where("brand")
      .in([...brand])
      .skip(page * limit)
      .limit(limit);

    res.json({
      LowtoHighcategory,
      HightoLowcategory,
      selectitembrand,
      items,
      itemcategory,
      Allitembrand,
      HightoLow,
      LowtoHigh,
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

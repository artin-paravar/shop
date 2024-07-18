import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    if (!email) {
      return res.json({ success: false, message: "please enter your email" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "please enter your password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user dosent exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "wrong email or password ",
      });
    }
    const token = createToken(user._id, user);
    res.json({ success: true, token, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//signup user
const singupUser = async (req, res) => {
  const { fullname, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }
    if (!fullname) {
      return res.json({
        success: false,
        message: "please enter your fullname",
      });
    }
    if (!email) {
      return res.json({ success: false, message: "please enter your email" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "please enter your password",
      });
    }

    //validating

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      fullname: fullname,
      email: email,
      password: hashedpassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { singupUser, loginUser };

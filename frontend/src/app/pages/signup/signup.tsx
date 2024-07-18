"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useShoppingCart } from "../../context/shop-context";

export default function Signup() {
  const navigate = useNavigate();
  const { setToken, localhost } = useShoppingCart();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //
  };
  ////////
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { fullname, email, password } = formData;
    try {
      const { data } = await axios.post(`${localhost}/api/user/signup`, {
        fullname,
        email,
        password,
      });
      if (!data.success) {
        toast.error(data.message);
      } else {
        navigate("/");
        setToken(data.token);
        toast.success("signup succesfull");
        setFormData({ email: "", password: "", fullname: "" });
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form className="max-w-[350px] w-full  m-auto p-[20px]  rounded-[5px] shadow-md flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <label>full name:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="fullname"
            placeholder=" your name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-start">
          <label>Email :</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="email"
            placeholder=" your email"
            autoComplete="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-start">
          <label>Password:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px]  outline-none rounded-[5px] text-[16px]"
            type="password"
            autoComplete="new-password"
            name="password"
            placeholder="your password"
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className=" rounded-[5px] bg-[#3498db] text-[#fff] p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
        >
          Submit
        </button>

        <Link className="text-[#3498db] text-center text-[18px]" to={"/login"}>
          login
        </Link>
      </form>
    </div>
  );
}

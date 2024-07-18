"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";

function Login() {
  const navigate = useNavigate();
  const { setToken, localhost } = useShoppingCart();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const { data } = await axios.post(`${localhost}/api/user/login`, {
        email,
        password,
      });
      if (!data.success) {
        toast.error(data.message);
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
        setToken(data.token);
        setFormData({ email: "", password: "" });
        toast.success("Login succesfull");
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[350px] w-full m-auto p-[20px]  rounded-[5px] shadow-md flex flex-col gap-4"
      >
        <p className="text-center text-red-600">you have to login first</p>
        <div className="flex flex-col items-start">
          <label>Email </label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] outline-none text-[16px]"
            name="email"
            autoComplete="email"
            placeholder=" your email"
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
          className=" rounded-[5px] bg-[#3498db] text-[#fff] p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
        <Link className="text-[#3498db] text-center text-[18px]" to={"/signup"}>
          Dont have an account yet?
        </Link>
      </form>
    </div>
  );
}
export default Login;

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
      [name]: value.toString().toLocaleLowerCase(),
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
        toast.success("ورود با موفقیت انجام شد");
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div className="relative left-1/2 -z-10 aspect-[1100/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffbb00] to-[#ffffff] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" max-w-[400px] w-full m-auto p-[25px] min-h-[400px] justify-between rounded-lg shadow-[2px_0px_20px_2px_lightgray] flex flex-col "
      >
        <div className="flex flex-col gap-2 items-start">
          <label>ادرس ایمیل</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] outline-none text-[16px]"
            name="email"
            autoComplete="email"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label>رمز عبور</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px]  outline-none rounded-[5px] text-[16px]"
            type="password"
            autoComplete="new-password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <button
          className=" rounded-[5px] bg-orange-400 text-white p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
          type="submit"
        >
          ورود
        </button>
        <Link className=" text-center text-[18px]" to={"/signup"}>
          عضو نیستید؟{" "}
          <span className="border-b border-gray-600 pb-1 ">ثبت نام</span>
        </Link>
      </form>
    </div>
  );
}
export default Login;

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full flex gap-5 bg-black text-white p-5">
      <Link to={"/add"}>اضافه کردن ایتم</Link>
      <Link to={"/order"}>سفارش های ثبت شده</Link>
      <Link to={"/list"}>تمام محصولات</Link>
    </div>
  );
};

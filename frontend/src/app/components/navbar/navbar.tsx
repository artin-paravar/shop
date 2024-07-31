import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

import clsx from "clsx";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";
import { Search } from "../search/searchInput";

export function Navbar() {
  const { getCartItemQuantity, token } = useShoppingCart();
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "خانه",
      link: "/",
    },

    {
      labe: "فروشگاه",
      link: "/shop",
    },
    {
      labe: "تماس با ما",
      link: "/contact",
    },
  ];

  return (
    <main className="shadow-slate-200 shadow-sm sticky top-0 z-[900] bg-white">
      <nav className="flex justify-between px-8 items-center py-6  container m-auto  ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to={"/"} className="text-4xl ">
              لوگو
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-800 hover:text-black"
              to={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 left-0  -translate-x-full z-[999]  transition-all  duration-75",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black  bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <div className="flex items-center justify-end">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className=" mt-0 mb-8 text-3xl cursor-pointer  "
              />
            </div>
            {navlinks.map((d, i) => (
              <Link onClick={() => setMenu(false)} key={i} to={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4 justify-center ">
          {/* cart icon */}
          <Link to={"/cart"} className="relative">
            <span className="absolute top-0 right-0 z-[100] text-[12px] translate-x-1 bg-orange-400 rounded-[50%] w-[16px] h-[16px] text-white items-center flex justify-center">
              {getCartItemQuantity()}
            </span>
            <PiShoppingCartThin className="text-3xl relative" />
          </Link>
          {token ? (
            <Link to={"/profile"}>
              <CiUser className="text-3xl relative" />
            </Link>
          ) : (
            <Link to={"/login"}>
              <CiLogin className="text-3xl" />
            </Link>
          )}
          <Search />
        </section>
      </nav>
    </main>
  );
}

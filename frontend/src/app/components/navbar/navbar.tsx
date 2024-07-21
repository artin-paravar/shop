import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";

import "./navbar.css";
import { useShoppingCart } from "../../context/shop-context";
import { Search } from "../search/searchInput";

export const Navbar = () => {
  const { getCartItemQuantity, token } = useShoppingCart();

  return (
    <>
      <div className="navbar flex items-center p-5 sm:p-[20px_0] w-full ">
        <div className="  links flex w-full items-center sm:justify-end justify-center   m-0  sm:mr-[40px] ">
          <div className=" gap-3 w-full max-w-[400px] sm:max-w-none sm:w-auto sm:flex-row flex-col-reverse items-center flex">
            <Search />
            <div className="flex items-center sm:justify-center justify-between w-full sm:w-auto">
              <Link to={"/"}> Shop </Link>
              {token ? (
                <>
                  <Link to={"/profile"}>profile</Link>
                </>
              ) : (
                <Link to={"/login"}>login</Link>
              )}
              <Link to={"/cart"} className="relative ">
                <span className="absolute top-0 right-0 z-0 text-[12px] translate-x-1 bg-orange-500 rounded-[50%] w-[16px] h-[16px] items-center flex justify-center">
                  {getCartItemQuantity()}
                </span>
                <PiShoppingCartThin size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

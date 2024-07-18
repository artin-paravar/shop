import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";

import "./navbar.css";
import { useShoppingCart } from "../../context/shop-context";

export const Navbar = () => {
  const { getCartItemQuantity, token } = useShoppingCart();

  return (
    <>
      <div className="navbar">
        <div className="links">
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
    </>
  );
};

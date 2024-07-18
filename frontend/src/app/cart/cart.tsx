import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/shop-context";

import { useNavigate } from "react-router-dom";
import { CartItem } from "./cart-item";
import "./cart.css";

import { getProducts } from "../services/api";
import { Products } from "../type/type";
import { LoadingPage } from "../components/loading/loading";

export default function Cart() {
  const [Products, setProducts] = useState<any>([]);
  const [Loading, setLoading] = useState(true);
  const { cartItems, getTotalcartAmount } = useShoppingCart();
  const navigate = useNavigate();
  useEffect(() => {
    getProducts().then((result) => {
      setLoading(false);
      setProducts(result.data);
    });
  }, []);
  return (
    <>
      {!Loading ? (
        <div className="cart p-4">
          {Products.map((item: Products) => {
            if (cartItems[item._id] > 0)
              return <CartItem key={item._id} {...item} id={item._id} />;
          })}

          {getTotalcartAmount() > 0 ? (
            <div className="checkout">
              <p className="text-[25px]">Subtotal: ${getTotalcartAmount()}</p>
              <div className="flex gap-4 flex-row">
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <h1 className="h-[90vh] flex items-center justify-center">
              Your Shopping Cart is Empty
            </h1>
          )}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

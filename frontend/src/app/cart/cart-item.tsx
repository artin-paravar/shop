import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/shop-context";
import { LoadingPage } from "../components/loading/loading";

import "./cart.css";

import { Products } from "../type/type";
import { getProduct } from "../services/api";
type CartItemProps = {
  id: number;
};
export const CartItem = ({ id }: CartItemProps) => {
  const [Products, setProducts] = useState<Products>([]);
  const [Loading, setLoading] = useState(true);
  const { cartItems, localhost } = useShoppingCart();

  useEffect(() => {
    getProduct(id).then((result) => {
      setProducts(result.item);
      setLoading(false);
    });
  }, []);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <>
      {!Loading ? (
        <div className="cartItem flex-col sm:flex-row sm:justify-start justify-center">
          <img src={`${localhost}/images/` + Products?.image} alt="/" />
          <div className="description gap-3 p-3 text-[30px]">
            <div className=" flex-col gap-5">
              <p>
                <b>{Products?.title}</b>
              </p>
              <p> Price: ${Products?.price}</p>
            </div>
            <div className="countHandler justify-center sm:justify-start ">
              <button
                className="addToCartBttnCart"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="p-1">{cartItems[id]}</span>
              <button
                className="addToCartBttnCart"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="text-[22px] border m-auto sm:m-0 block bg-black p-1 text-white rounded-lg"
            >
              Delete Item
            </button>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

import { useShoppingCart } from "../../context/shop-context";
import { Link } from "react-router-dom";

type Props = {
  itemId: number;
};
export const Buttons = ({ itemId }: Props) => {
  const { increaseCartQuantity, decreaseCartQuantity, cartItems } =
    useShoppingCart();
  return (
    <div className="flex items-center justify-between gap-2 ">
      <Link
        to="/"
        className="border border-solid border-zinc-800 p-3 rounded-lg"
      >
        continue Shopping
      </Link>
      {cartItems[itemId] ? (
        <div className="flex gap-2 justify-center items-center p-[5px_0]">
          <button
            className="addToCartBttn"
            onClick={() => increaseCartQuantity(itemId)}
          >
            +
          </button>
          <p className="text-xl">{cartItems[itemId]}</p>
          <button
            onClick={() => decreaseCartQuantity(itemId)}
            className="addToCartBttn"
          >
            -
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => increaseCartQuantity(itemId)}
            className="p-3 m-1 border-zinc-800 rounded-lg border-solid border"
          >
            add to cart
          </button>
        </div>
      )}
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";

type Props = {
  itemId: string | any;
};
export const Buttons = ({ itemId }: Props) => {
  const { increaseCartQuantity, decreaseCartQuantity, token, cartItems } =
    useShoppingCart();
  const navigate = useNavigate();
  return (
    <div className="flex  items-center  gap-2 ">
      {cartItems[itemId] ? (
        <div className="flex gap-2  justify-between items-center border w-[120px] p-[5px_10px]  ">
          <button
            className="hover:animate-pulse text-xl flex items-center justify-center"
            onClick={() => increaseCartQuantity(itemId)}
          >
            +
          </button>
          <p className="text-xl">{cartItems[itemId]}</p>
          <button
            onClick={() => decreaseCartQuantity(itemId)}
            className="hover:animate-pulse text-3xl flex items-center justify-center "
          >
            -
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() =>
              token ? increaseCartQuantity(itemId) : navigate("/login")
            }
            className="animate-bounce duration-75 transition-all hover:bg-black p-[7px_15px] m-1 bg-orange-400 text-white rounded-lg border-solid border"
          >
            افزودن به سبد خرید{" "}
          </button>
        </div>
      )}
    </div>
  );
};

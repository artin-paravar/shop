import { useShoppingCart } from "../context/shop-context";
import { LoadingPage } from "../components/loading/loading";
import "./cart.css";
import { ProductQuery } from "../services/queries";
type CartItemProps = {
  id: number;
};
export const CartItem = ({ id }: CartItemProps) => {
  const Products = ProductQuery(id);
  const { cartItems, localhost } = useShoppingCart();
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  if (Products.isLoading) return <LoadingPage />;
  return (
    <>
      <div className="cartItem flex-col sm:flex-row sm:justify-start justify-center">
        <img
          src={`${localhost}/images/` + Products?.data?.item?.image}
          alt="/"
        />
        <div className="description gap-3 p-3 text-[30px]">
          <div className=" flex-col gap-5">
            <p>
              <b>{Products?.data?.item?.title}</b>
            </p>
            <p> Price: ${Products?.data?.item?.price}</p>
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
    </>
  );
};

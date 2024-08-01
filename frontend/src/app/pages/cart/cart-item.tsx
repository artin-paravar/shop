import { LoadingPage } from "../../components/loading/loading";
import { useShoppingCart } from "../../context/shop-context";
import { ProductQuery } from "../../services/queries";

type CartItemProps = {
  id: any;
};
export const CartItem = ({ id }: CartItemProps) => {
  const Products = ProductQuery(id);
  const { cartItems, localhost } = useShoppingCart();
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  if (Products.isLoading) return <LoadingPage />;
  return (
    <>
      <div className="flex border-b justify-center items-center flex-col md:flex-row p-[10px_0] ">
        <img
          className="object-contain md:w-[90px] md:h-[90px] w-[250px] h-[250px]"
          src={`${localhost}/images/` + Products?.data?.item?.image}
          alt="/"
        />
        <div className=" gap-3 p-3 text-[30px]">
          <div className=" flex gap-5  items-center justify-between">
            <div className="max-w-[400px] items-start gap-2 flex flex-col">
              <p className="line-clamp-2  text-[15px]">
                {Products?.data?.item?.title}
              </p>

              <button
                onClick={() => removeFromCart(id)}
                className="text-[14px] bg-orange-400 text-white p-[3px_15px] sm:m-0 block rounded-lg"
              >
                حذف
              </button>
            </div>
            {/*  */}
            <div className=" justify-center flex items-center ">
              <button
                className="rounded-lg w-[35px] h-[35px]  bg-gray-900 text-gray-100 flex items-center justify-center"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="p-1">{cartItems[id]}</span>
              <button
                className=" rounded-lg w-[35px] h-[35px]  bg-gray-900 text-gray-100 flex items-center justify-center "
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            {/*  */}
            <div className="text-[15px]">
              {Products?.data?.item?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              تومان
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

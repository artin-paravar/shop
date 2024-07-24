import { useShoppingCart } from "../context/shop-context";
export const Product = ({ title, price, image }: any) => {
  const { localhost } = useShoppingCart();
  return (
    <div className="product hover:scale-105  flex items-center justify-between  cursor-pointer rounded-lg flex-col object-contain">
      <div className="w-full sm:h-[430px] ">
        <img src={`${localhost}/images/` + image} alt="/" />
      </div>
      <div className="description">
        <p>
          <b className="line-clamp-1">{title}</b>
        </p>
        <p> ${price}</p>
      </div>

      <button className="p-2 m-1 border-zinc-500 rounded-md border-solid border">
        view details
      </button>
    </div>
  );
};

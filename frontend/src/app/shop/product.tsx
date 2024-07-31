import { useShoppingCart } from "../context/shop-context";
import { Products } from "../type/type";
export const Product = ({ title, price, image }: Products) => {
  const { localhost } = useShoppingCart();
  return (
    <div className="outline-none   hover:scale-105 transition-all  p-2 overflow-hidden ">
      <img
        className="w-full h-[400px] object-contain "
        src={`${localhost}/images/` + image}
        alt=""
      />

      <div className="w-[80%] m-auto">
        <p className="line-clamp-1">{title}</p>
        <p className="text-gray-600">
          {[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} قیمت
        </p>
      </div>
    </div>
  );
};

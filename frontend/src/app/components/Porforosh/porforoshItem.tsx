import { Products } from "../../type/type";
import { useShoppingCart } from "../../context/shop-context";

export const PorforoshItem = ({ title, price, image }: Products) => {
  const { localhost } = useShoppingCart();
  return (
    <div>
      <div className=" rounded-lg p-2 max-w-[350px] flex flex-col gap-1 overflow-hidden sm:border-l border-b">
        <img
          src={`${localhost}/images/` + image}
          alt=""
          className="hover:scale-105 transition-all"
        />
        <h4 className="line-clamp-1 text-[15px] ">{title}</h4>
        <h4 className="flex text-[15px] text-gray-600 center justify-start">
          {[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} قیمت
        </h4>
      </div>
    </div>
  );
};

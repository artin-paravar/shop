import { useState } from "react";
import { Products } from "../../type/type";

export const PorforoshItem = ({ title, price, productImage }: Products) => {
  const [changeImage, setChangeImage] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setChangeImage(true)}
        onMouseLeave={() => setChangeImage(false)}
        className=" rounded-lg p-2 max-w-[350px] transition-all hover:scale-105 duration-300 flex flex-col gap-1 overflow-hidden sm:border-l border-b"
      >
        {changeImage ? (
          <img
            className="w-full h-[400px] object-contain    "
            src={productImage[1]}
            alt=""
          />
        ) : (
          <img
            className="w-full h-[400px] object-contain   "
            src={productImage[0]}
            alt=""
          />
        )}
        <h4 className="line-clamp-1 text-[15px] ">{title}</h4>
        <h4 className="flex text-[15px] text-gray-600 center justify-start">
          {[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} قیمت
        </h4>
      </div>
    </div>
  );
};

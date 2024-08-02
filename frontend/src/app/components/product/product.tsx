import { useState } from "react";
import { Products } from "../../type/type";
export const Product = ({ title, price, productImage }: Products) => {
  const [changeImage, setChangeImage] = useState(false);

  return (
    <div
      onMouseEnter={() => setChangeImage(true)}
      onMouseLeave={() => setChangeImage(false)}
      className=" outline-none   hover:scale-105 transition-all duration-300  p-2 overflow-hidden "
    >
      {changeImage ? (
        <img
          className="w-full h-[400px] object-contain    "
          src={productImage[0]}
          alt=""
        />
      ) : (
        <img
          className="w-full h-[400px] object-contain   "
          src={productImage[1]}
          alt=""
        />
      )}

      <div className="w-[80%] m-auto">
        <p className="line-clamp-1">{title}</p>
        <p className="text-gray-600">
          {[price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} قیمت
        </p>
      </div>
    </div>
  );
};

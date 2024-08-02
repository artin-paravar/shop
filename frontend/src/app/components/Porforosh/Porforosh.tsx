import { Link } from "react-router-dom";
import { Products } from "../../type/type";
import { Loadinginfinite } from "../loading/loadinginfinite";
import { PorforoshItem } from "./porforoshItem";

export const Porforosh = ({ data, title }: Products) => {
  return (
    <div className="flex flex-col w-full container items-center justify-center gap-4 rounded-2xl  p-3 shadow-[2px_0px_20px_2px_lightgray]">
      <h1 className="text-center text-[28px] mb-5 ">{title}</h1>
      {data ? (
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid gap-4 place-items-center">
          {data?.map((items: Products) => {
            return (
              <Link key={items._id} to={`product/${items._id}`}>
                <PorforoshItem
                  productImage={items.productImage}
                  price={items.price}
                  title={items.title}
                  id={items._id}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <Loadinginfinite />
      )}

      <Link
        to={"/shop"}
        className="hover:bg-orange-400 hover:text-white hover:border-orange-500 transition-all text-center mb-4 mt-4 p-[15px_30px] border flex items-center justify-center rounded-full border-gray-300"
      >
        مشاهده تمام محصولات
      </Link>
    </div>
  );
};

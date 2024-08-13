import { useShoppingCart } from "../../context/shop-context";
import { ITEM, Products } from "../../type/type";
import { IoMdClose } from "react-icons/io";

export const CloseBrandItem = ({ setSelectBrand }: ITEM) => {
  const { setSearchParams, searchParams, brand } = useShoppingCart();

  return (
    <div className="flex flex-col gap-1">
      <p className="text-[19px] text-center">برند</p>
      <div className=" grid grid-cols-2  gap-4">
        {brand?.map((item: Products) => {
          return (
            <div
              key={item}
              onClick={() => {
                setSearchParams((prev: any) => {
                  searchParams.delete("brand", item);
                  searchParams.delete("max");
                  searchParams.delete("min");
                  return prev;
                });
                //
                setSelectBrand &&
                  setSelectBrand((prev: object) => {
                    return {
                      ...prev,
                      [item]: false,
                    };
                  });
              }}
              className="flex p-1 cursor-pointer w-full hover:animate-pulse gap-1 duration-75 rounded-3xl border-gray-300 border justify-center items-center "
            >
              <span className="text-[16px]    transition-all cursor-pointer">
                {item}
              </span>
              <IoMdClose className="text-gray-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

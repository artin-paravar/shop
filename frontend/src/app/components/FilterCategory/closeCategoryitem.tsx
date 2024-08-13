import { useShoppingCart } from "../../context/shop-context";
import { ITEM, Products } from "../../type/type";
import { IoMdClose } from "react-icons/io";
export const CloseCategoryitem = ({ setSelectCategory }: ITEM) => {
  const { setSearchParams, searchParams, Category } = useShoppingCart();

  return (
    <div className="flex flex-col gap-1">
      <p className="text-[19px] text-center">دسته بندی</p>
      <div className=" flex items-center justify-start  ">
        {Category?.map((item: Products) => {
          return (
            <div
              key={item}
              onClick={() => {
                setSearchParams(
                  (prev: any) => {
                    searchParams.delete("max");
                    searchParams.delete("min");
                    searchParams.delete("category", item);
                    return prev;
                  },
                  { replace: true }
                );
                setSelectCategory &&
                  setSelectCategory(() => {
                    return { [item]: false };
                  });
              }}
              className="flex p-2 cursor-pointer  hover:animate-pulse gap-1 duration-75 rounded-3xl border-gray-300 border justify-center items-center "
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

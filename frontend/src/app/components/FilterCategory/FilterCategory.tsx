import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { MdArrowBackIos } from "react-icons/md";

import { ProductsQuery } from "../../services/queries";
import { Products } from "../../type/type";
import { IoMdClose } from "react-icons/io";

export const FilterCategory = () => {
  const { setSearchParams, Category } = useShoppingCart();
  const Allproducts = ProductsQuery();
  return (
    <>
      <div className=" w-full  p-8 border-b md:p-[0_20px] flex-col gap-2 flex  sm:text-[20px] flex-1 items-center md:max-w-[300px]   text-[17px] ">
        <div className="w-full sticky top-28 flex flex-col gap-2">
          <h2 className="text-center text-2xl">دسته‌بندی‌ها</h2>
          <div className=" flex   gap-8 flex-wrap   flex-col items-start  ">
            <hr className="w-full bg-black " />
            {Category !== "All" ? (
              <div
                onClick={() =>
                  setSearchParams(
                    (prev: any) => {
                      prev.set("category", "All");
                      return prev;
                    },
                    { replace: true }
                  )
                }
                className="flex p-1 hover:animate-pulse duration-75 rounded-3xl border-gray-300 border justify-start items-center "
              >
                <span className="text-[16px]   transition-all cursor-pointer">
                  حذف فیلتر
                </span>
                <IoMdClose className="text-gray-500" />
              </div>
            ) : null}
            {Allproducts.isLoading ? (
              <div className="items-center flex justify-center w-full">
                <Loadinginfinite />
              </div>
            ) : (
              Allproducts?.data?.itemcategory?.map(
                (item: Products, index: number) => {
                  const isActive = item === Category;
                  return (
                    <div className="w-full flex gap-2" key={index}>
                      <div className=" flex items-center justify-between w-full cursor-pointer text-m ">
                        <span
                          className={
                            isActive
                              ? "transition-all text-orange-400 duration-75] hover:text-orange-400 duration-300 "
                              : "text-black hover:text-orange-400 transition-all "
                          }
                          onClick={() =>
                            setSearchParams(
                              (prev: any) => {
                                prev.set("category", item);
                                return prev;
                              },
                              { replace: true }
                            )
                          }
                        >
                          {item}
                        </span>
                        <span className="text-gray-400 text-sm">
                          <MdArrowBackIos />
                        </span>
                      </div>
                    </div>
                  );
                }
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

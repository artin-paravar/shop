import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { MdArrowBackIos, MdClose } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import { categoryANDbrand, ProductsQuery } from "../../services/queries";
import { Products } from "../../type/type";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const FilterCategory = () => {
  const { setSearchParams, Category, brand } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const Allproducts = ProductsQuery();
  const Allproducts2 = categoryANDbrand(Category, brand);
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className=" cursor-pointer md:hidden gap-1 -translate-y-12  flex bg-white rounded-lg p-2 fixed border text-xl"
      >
        <FaFilter /> <p className="text-sm">فیلتر</p>
      </span>
      <div
        className={
          open
            ? "  w-full overflow-scroll md:overflow-auto  p-8 md:p-[0_20px] md:static bg-white  pt-28 top-0 h-full md:h-auto transition-all md:translate-x-0 fixed  gap-2 sm:text-[20px]   md:max-w-[300px]   text-[17px] "
            : "  w-full   p-8 md:p-[0_20px] md:static bg-white pt-28  top-0 h-full md:h-auto transition-all translate-x-full  md:translate-x-0 fixed  gap-2 sm:text-[20px] flex-1  md:max-w-[300px]   text-[17px] "
        }
      >
        {Allproducts.isLoading ? (
          <div className="items-center flex mt-20 justify-center w-full">
            <Loadinginfinite />
          </div>
        ) : (
          <div className="w-full sticky md:top-28  flex flex-col md:gap-2 gap-4">
            <h2 className="text-center text-2xl">دسته‌بندی‌ها</h2>

            <div className=" flex   gap-8 flex-wrap   flex-col items-start  ">
              <hr className="w-full bg-black " />
              {Category !== "All" ? (
                <div
                  onClick={() =>
                    setSearchParams(
                      (prev: any) => {
                        prev.set("category", "All");
                        prev.set("brand", "All");
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

              {Allproducts?.data?.itemcategory?.map(
                (item: Products, index: number) => {
                  const isActive = item === Category;
                  return (
                    <div className="w-full flex gap-2" key={index}>
                      <div className=" flex items-center justify-between w-full cursor-pointer text-md ">
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
                                prev.set("brand", "All");

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
              )}
            </div>
            <hr className="m-[10px_0] w-full bg-black " />
            <h2 className="text-center text-2xl">برند ها</h2>
            <div className=" flex   gap-8 flex-wrap   flex-col items-start  ">
              {Category === "All" ? (
                Allproducts?.data?.Allitembrand?.map(
                  (item: Products, index: number) => {
                    const isActive = item === brand;
                    return (
                      <div className="w-full flex gap-2" key={index}>
                        <div className=" flex items-center justify-between w-full cursor-pointer text-[16px] ">
                          <span
                            className={
                              isActive
                                ? "transition-all text-orange-400  hover:text-orange-400 duration-300 "
                                : "text-black hover:text-orange-400 transition-all "
                            }
                            onClick={() =>
                              setSearchParams(
                                (prev: any) => {
                                  prev.set("brand", item);

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
              ) : Allproducts2.isLoading ? (
                <div className="w-full flex items-center justify-center mt-5">
                  <Loadinginfinite />
                </div>
              ) : (
                Allproducts2?.data?.selectitembrand?.map(
                  (item: Products, index: number) => {
                    const isActive = item === brand;
                    return (
                      <div className="w-full flex gap-2" key={index}>
                        <div className=" flex items-center justify-between w-full cursor-pointer text-[16px] ">
                          <span
                            className={
                              isActive
                                ? "transition-all text-orange-400  hover:text-orange-400 duration-300 "
                                : "text-black hover:text-orange-400 transition-all "
                            }
                            onClick={() =>
                              setSearchParams(
                                (prev: any) => {
                                  prev.set("brand", item);

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
        )}
        <span
          onClick={() => setOpen(false)}
          className="absolute md:hidden top-[calc(0px+88px)] right-0 p-2 m-3 border rounded-full text-2xl border-gray-400 hover:animate-pulse duration-75 cursor-pointer "
        >
          <MdClose />
        </span>
      </div>
    </>
  );
};

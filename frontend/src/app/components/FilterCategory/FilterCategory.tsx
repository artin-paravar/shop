import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { MdClose } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import { categoryANDbrand, ProductsQuery } from "../../services/queries";
import { Products } from "../../type/type";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import PriceRange from "../priceRange/Pricerange";

export const FilterCategory = () => {
  const { setSearchParams, Category, brand, searchParams } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const Allproducts = ProductsQuery();
  const Allproducts2 = categoryANDbrand(Category, brand);
  const [selectCategory, setSelectCategory] = useState(Category);
  function handleBrand(e: any) {
    const { value, checked } = e.target;

    if (checked) {
      setSearchParams((prev: any) => {
        searchParams.append("brand", value);
        searchParams.delete("max");
        searchParams.delete("min");

        return prev;
      });
    }
  }
  //
  function handleCategory(e: any) {
    const { value, checked } = e.target;
    if (checked === false) {
      setSearchParams((prev: any) => {
        searchParams.delete("category");
        return prev;
      });

      setSelectCategory(() => {
        return { [value]: false };
      });
    }
    setSelectCategory(() => {
      return { [value]: checked };
    });

    if (checked === true) {
      setSearchParams((prev: any) => {
        searchParams.set("category", value);
        searchParams.delete("brand");
        searchParams.delete("max");
        searchParams.delete("min");

        return prev;
      });
    }
  }

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
        {brand.length >= 1 || Category.length >= 1 ? (
          <div className="mb-4 flex-col flex gap-2 ">
            <h2 className="text-center text-2xl ">فیلترهای فعال</h2>
            <hr className="w-full bg-black " />
            {Category.length >= 1 ? (
              <div className="flex flex-col gap-1">
                <p className="text-[19px] text-center">دسته بندی</p>
                <div className=" grid grid-cols-2  gap-4">
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
                          setSelectCategory(() => {
                            return { [item]: false };
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
            ) : null}
            {brand.length >= 1 && Category.length >= 1 ? (
              <hr className="m-[5px_0]" />
            ) : null}
            {brand.length >= 1 ? (
              <div className="flex flex-col gap-1">
                <p className="text-[19px] text-center">برند</p>
                <div className=" grid grid-cols-2  gap-4">
                  {brand?.map((item: Products) => {
                    return (
                      <div
                        key={item}
                        onClick={() =>
                          setSearchParams((prev: any) => {
                            searchParams.delete("brand", item);
                            searchParams.delete("max");
                            searchParams.delete("min");
                            return prev;
                          })
                        }
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
            ) : null}
          </div>
        ) : null}

        {/* CATEGORY */}

        {Allproducts.isLoading ? (
          <div className="items-center flex mt-20 justify-center w-full">
            <Loadinginfinite />
          </div>
        ) : (
          <div className="w-full sticky md:top-28  flex flex-col md:gap-1 gap-4">
            <h2 className="text-center text-2xl">دسته‌بندی‌ها</h2>
            <div className=" flex   gap-8 flex-wrap   flex-col items-start  ">
              <hr className="w-full bg-black " />
              {Allproducts?.data?.itemcategory?.map(
                (item: Products, index: number) => {
                  return (
                    <div className="w-full flex gap-2" key={index}>
                      <div className=" flex items-center gap-2 w-full cursor-pointer text-lg ">
                        <input
                          type="checkbox"
                          name="category"
                          value={item}
                          checked={selectCategory[item] ? true : false}
                          id={item}
                          onChange={(e) => handleCategory(e)}
                        />
                        <label
                          htmlFor={item}
                          className={
                            "text-black md:hover:text-orange-400 transition-all "
                          }
                        >
                          {item}
                        </label>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {/*  BRAND */}

            <hr className="m-[10px_0] w-full bg-black " />
            <h2 className="text-center text-2xl">برند ها</h2>
            <div className=" flex  md:max-h-[280px]   gap-8 overflow-y-scroll   flex-col items-start  ">
              {Category.length == 0 ? (
                Allproducts?.data?.Allitembrand?.map(
                  (item: Products, index: number) => {
                    return (
                      <div className="w-full flex gap-2" key={index}>
                        <div className=" flex items-center gap-2 w-full cursor-pointer text-[16px] ">
                          <input
                            name="brand"
                            value={item}
                            type="checkbox"
                            id={item}
                            onChange={(e) => handleBrand(e)}
                          />
                          <label
                            htmlFor={item}
                            className={
                              "text-black hover:text-orange-400 transition-all "
                            }
                          >
                            {item}
                          </label>
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
                    // const isActive = item == brand[index];
                    return (
                      <div className="w-full flex gap-2" key={index}>
                        <div className=" flex items-center gap-2 w-full cursor-pointer text-[16px] ">
                          <input
                            name="brand"
                            value={item}
                            type="checkbox"
                            id={item}
                            onChange={(e) => handleBrand(e)}
                          />
                          <label
                            htmlFor={item}
                            className={
                              "text-black hover:text-orange-400 transition-all "
                            }
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    );
                  }
                )
              )}
            </div>
            <hr className="m-[10px_0] w-full bg-black " />
            <PriceRange />
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

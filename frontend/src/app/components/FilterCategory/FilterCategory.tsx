import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { MdClose } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import { categoryANDbrand, ProductsQuery } from "../../services/queries";
import { Products } from "../../type/type";
import { useState } from "react";
import PriceRange from "../priceRange/Pricerange";
import { BrandItem } from "./brandItem";
import { CategoryItem } from "./categoryItem";
import { CloseCategoryitem } from "./closeCategoryitem";
import { CloseBrandItem } from "./closeBrandItem";

export const FilterCategory = () => {
  const { setSearchParams, Category, brand, searchParams } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const Allproducts = ProductsQuery();
  const Allproducts2 = categoryANDbrand(Category, brand);
  const [selectBrand, setSelectBrand] = useState(brand);
  const [selectCategory, setSelectCategory] = useState(Category);

  //handle delete all filter
  function handleDeleteAllfilter() {
    setSearchParams(
      (prev: any) => {
        searchParams.delete("max");
        searchParams.delete("min");
        searchParams.delete("category");
        searchParams.delete("brand");
        searchParams.delete("sort");
        return prev;
      },
      { replace: true }
    );
    setSelectCategory(() => {
      return [];
    });
    setSelectBrand(() => {
      return [];
    });
  }
  //mobile
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
        <FaFilter /> <p className="text-sm">فیلتر</p>;
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
          <div className="w-full sticky md:top-28  flex flex-col md:gap-1 gap-4">
            {brand.length >= 1 || Category.length >= 1 ? (
              <div className="mb-4 flex-col flex gap-2 ">
                <h2 className="text-center text-2xl ">فیلترهای فعال</h2>
                <hr className="w-full bg-black " />
                {/*  */}
                <span
                  onClick={handleDeleteAllfilter}
                  className="text-[16px] flex mt-2 hover:animate-pulse  gap-1 text-orange-400 justify-center items-center w-fit    transition-all cursor-pointer"
                >
                  حذف تمام فیلتر‌ها
                </span>

                {/* close category */}
                {Category.length >= 1 ? (
                  <CloseCategoryitem setSelectCategory={setSelectCategory} />
                ) : null}

                {brand.length >= 1 && Category.length >= 1 ? (
                  <hr className="m-[5px_0]" />
                ) : null}

                {/* close brand */}
                {brand.length >= 1 ? (
                  <CloseBrandItem setSelectBrand={setSelectBrand} />
                ) : null}
              </div>
            ) : null}

            {/* CATEGORY */}

            <h2 className="text-center text-2xl">دسته‌بندی‌ها</h2>
            <div className=" flex   gap-8 flex-wrap   flex-col items-start  ">
              <hr className="w-full bg-black " />
              {Allproducts?.data?.itemcategory?.map((item: Products) => {
                return (
                  <CategoryItem
                    key={item}
                    setSelectBrand={setSelectBrand}
                    item={item}
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                  />
                );
              })}
            </div>
            {/*  BRAND */}
            <hr className="m-[10px_0] w-full bg-black " />
            <h2 className="text-center text-2xl">برند ها</h2>
            <div className=" flex  md:max-h-[280px]   gap-8 overflow-y-scroll   flex-col items-start  ">
              {Category.length == 0 ? (
                Allproducts?.data?.Allitembrand?.map((item: Products) => {
                  return (
                    <BrandItem
                      key={item}
                      item={item}
                      selectBrand={selectBrand}
                      setSelectBrand={setSelectBrand}
                    />
                  );
                })
              ) : Allproducts2.isLoading ? (
                <div className="w-full flex items-center justify-center p-[20px_0]">
                  <Loadinginfinite />
                </div>
              ) : (
                Allproducts2?.data?.selectitembrand?.map((item: Products) => {
                  return (
                    <BrandItem
                      key={item}
                      item={item}
                      selectBrand={selectBrand}
                      setSelectBrand={setSelectBrand}
                    />
                  );
                })
              )}
            </div>
            {/* PRICE RANGE */}
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

import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { categoryitem } from "../../services/queries";
import { Products } from "../../type/type";

export const FilterCategory = () => {
  const { setSearchParams, Category } = useShoppingCart();
  const itemCategory = categoryitem(Category);
  console.log(itemCategory?.data?.AllItemsbyCategory);
  return (
    <>
      <div className=" w-full  p-[0_20px] flex-col gap-2 flex  sm:text-[20px] flex-1 items-center max-w-[300px]   text-[17px] ">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-center text-2xl">دسته‌بندی‌ها</h2>
          <div className="div-active flex sticky top-10  h-[600px] gap-8 flex-wrap   flex-col items-start  ">
            <hr className="w-full bg-black " />
            <div className="flex gap-2"></div>

            {itemCategory.isLoading ? (
              <div className="items-center flex justify-center w-full">
                <Loadinginfinite />
              </div>
            ) : (
              itemCategory?.data?.itemcategory?.map(
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
                          {" ( "} {itemCategory?.data?.items.length} {" ) "}
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

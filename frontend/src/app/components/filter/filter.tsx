import "./filter.css";
import { Loadinginfinite } from "../loading/loadinginfinite";
import { useShoppingCart } from "../../context/shop-context";
import { useDebounce } from "../debounce/usedebounce";
import { searchProductQuery } from "../../services/queries";

export const FilterItem = () => {
  const { searchParams, setSearchParams } = useShoppingCart();
  const Category = searchParams.get("category") as string;
  const q = searchParams.get("q") as string;
  const debounced = useDebounce(q);

  const itemCategory = searchProductQuery(Category, debounced);
  if (itemCategory.isLoading) return <Loadinginfinite />;

  return (
    <>
      <div className="filter flex-col gap-2 flex z-[998] sm:text-[20px] border border-l w-[300px] items-center  p-[40px_10px] text-[17px] ">
        <h2>Category</h2>
        <div className="div-active flex sticky top-10  h-[600px] gap-8 flex-wrap   flex-col items-start  ">
          <hr className="w-full bg-black " />
          <div className="flex gap-2"></div>

          {itemCategory?.data?.itemcategory?.map(
            (item: string, index: number) => {
              return (
                <div className="flex gap-2" key={index}>
                  <label
                    htmlFor={item}
                    className={Category == item ? "active" : ""}
                  >
                    <input
                      onClick={() =>
                        setSearchParams(
                          (prev: any) => {
                            prev.set("category", item);
                            return prev;
                          },
                          { replace: true }
                        )
                      }
                      type="radio"
                      name="filter"
                      id={item}
                    />
                    <span className="checkmark"></span>
                    {item}
                  </label>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

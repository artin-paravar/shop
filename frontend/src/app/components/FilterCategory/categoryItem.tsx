import { useShoppingCart } from "../../context/shop-context";
import { ITEM } from "../../type/type";
import "./checkbox.css";
export const CategoryItem = ({
  item,
  setSelectCategory,
  selectCategory,
  setSelectBrand,
}: ITEM) => {
  const { setSearchParams, searchParams } = useShoppingCart();

  //category handle
  function handleCategory(e: any) {
    const { value, checked } = e.target;
    if (checked === false) {
      setSearchParams((prev: any) => {
        searchParams.delete("category");
        return prev;
      });
    }
    //
    setSelectCategory &&
      setSelectCategory(() => {
        return { [value]: checked };
      });
    //
    if (checked === true) {
      setSearchParams((prev: any) => {
        setSelectBrand &&
          setSelectBrand(() => {
            return [];
          });
        searchParams.set("category", value);
        searchParams.delete("brand");
        searchParams.delete("max");
        searchParams.delete("min");

        return prev;
      });
    }
  }
  return (
    <div className=" w-full flex gap-2">
      <div className="checkbox-wrapper-4 flex items-center gap-2 w-full cursor-pointer text-lg ">
        <input
          type="checkbox"
          name="category"
          value={item}
          className="inp-cbx"
          checked={selectCategory[item] ? true : false}
          id={item}
          onChange={(e) => handleCategory(e)}
        />
        <label
          htmlFor={item}
          className="cbx text-black md:hover:text-orange-400 transition-all "
        >
          <span>
            <svg width="12px" height="10px">
              <use xlinkHref="#check-4"></use>
            </svg>
          </span>
          {item}
        </label>
        <svg className="inline-svg">
          <symbol id="check-4" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </symbol>
        </svg>
      </div>
    </div>
  );
};

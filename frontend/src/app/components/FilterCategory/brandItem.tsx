import { useShoppingCart } from "../../context/shop-context";
import "./checkbox.css";
import { ITEM } from "../../type/type";

export const BrandItem = ({ item, selectBrand, setSelectBrand }: ITEM) => {
  const { setSearchParams, searchParams } = useShoppingCart();
  //brand handle
  function handleBrand(e: any) {
    const { value, checked } = e.target;
    //
    setSelectBrand &&
      setSelectBrand((prev: object) => {
        if (checked === false) {
          setSearchParams((prev: any) => {
            searchParams.delete("brand", value);
            return prev;
          });
        }
        return {
          ...prev,
          [value]: checked,
        };
      });
    //
    if (checked) {
      setSearchParams((prev: any) => {
        searchParams.append("brand", value);
        searchParams.delete("max");
        searchParams.delete("min");

        return prev;
      });
    }
  }
  return (
    <div className="w-full flex gap-2" key={item}>
      <div className="checkbox-wrapper-4 flex items-center gap-2 w-full cursor-pointer text-[16px] ">
        <input
          name="brand"
          value={item}
          className="inp-cbx"
          type="checkbox"
          checked={selectBrand[item] ? true : false}
          id={item}
          onChange={(e) => handleBrand(e)}
        />
        <label
          htmlFor={item}
          className="cbx text-black hover:text-orange-400 transition-all "
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

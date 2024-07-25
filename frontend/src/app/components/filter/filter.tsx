import React, { useEffect, useState } from "react";
import "./filter.css";
import { searchandFilterItem } from "../../services/api";
import { useShoppingCart } from "../../context/shop-context";
import { Loadinginfinite } from "../loading/loadinginfinite";
type PropsCategory = {
  category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
};
export const FilterItem = ({ category, setcategory }: PropsCategory) => {
  const [itemCategory, setitemCategory] = useState<any>([]);
  const { inputData } = useShoppingCart();
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    searchandFilterItem(inputData, category).then((result) => {
      setitemCategory(result.itemcategory);
      setloading(false);
    });
  }, [inputData]);
  return (
    <>
      <div className="filter flex-col gap-2 flex z-[998] sm:text-[20px] border border-l w-[300px] items-center  p-[40px_10px] text-[17px] ">
        <h2>Category</h2>
        <div className="div-active flex sticky top-10  h-[600px] gap-8 flex-wrap   flex-col items-start  ">
          <hr className="w-full bg-black " />
          <div className="flex gap-2"></div>
          {loading ? (
            <Loadinginfinite />
          ) : (
            itemCategory?.map((item: string, index: number) => {
              return (
                <div className="flex gap-2" key={index}>
                  <label
                    htmlFor={item}
                    className={category == item ? "active" : ""}
                  >
                    <input
                      onClick={() => setcategory(item)}
                      type="radio"
                      name="filter"
                      id={item}
                    />
                    <span className="checkmark"></span>
                    {item}
                  </label>
                </div>
              );
            })
          )}
          {/*  */}
        </div>
      </div>
    </>
  );
};

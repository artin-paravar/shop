import React from "react";
import "./filter.css";
type PropsCategory = {
  category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
};
export const FilterItem = ({ category, setcategory }: PropsCategory) => {
  return (
    <>
      <div className="filter  flex z-[998] sm:text-[20px] border border-l w-[300px] justify-center  p-[40px_10px] text-[17px] ">
        <div className="div-active flex sticky top-10  h-[600px] gap-8 flex-wrap   flex-col items-start  ">
          <h3>Filter</h3>
          <hr className="w-full bg-black " />
          <h2>Category</h2>
          <div className="flex gap-2">
{/*             <label htmlFor="all" className={category === "All" ? "active" : ""}>
              <input
                onClick={() => setcategory("All")}
                type="radio"
                name="filter"
                id="all"
              />
              <span className="checkmark"></span>
              All
            </label> */}
          </div>
          {/*  */}
          <div className="flex gap-2">
            <label htmlFor="menclothing">
              <input
                onClick={() => setcategory("men's clothing")}
                type="radio"
                name="filter"
                id="menclothing"
              />
              <span className="checkmark"></span>
              mens clothing
            </label>
          </div>
          {/*  */}
          <div className="flex gap-2">
            <label htmlFor="jewelery">
              <input
                onClick={() => setcategory("jewelery")}
                type="radio"
                name="filter"
                id="jewelery"
              />
              <span className="checkmark"></span>
              jewelery
            </label>
          </div>
          {/*  */}
          <div className="flex gap-2">
            <label htmlFor="electronics">
              <input
                onClick={() => setcategory("electronics")}
                type="radio"
                name="filter"
                id="electronics"
              />
              <span className="checkmark"></span>
              electronics
            </label>
          </div>
          {/*  */}
          <div className="flex gap-2">
            <label htmlFor="women's clothing">
              <input
                onClick={() => setcategory("women's clothing")}
                type="radio"
                name="filter"
                id="women's clothing"
              />
              <span className="checkmark"></span>
              womens clothing
            </label>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { Assests } from "../../assets/assets";
import { IMG } from "../../type/type";

export const CategoryUI = () => {
  const { categoryimg } = Assests();
  return (
    <div className="flex flex-col gap-4  ">
      <h1 className="sm:text-[28px] text-[20px]  text-center ">
        خرید بر اساس دسته بندی ها
      </h1>
      <div className=" h-full gap-3 flex flex-col  md:grid grid-cols-2 w-full m-auto ">
        {categoryimg?.map((item: IMG) => {
          return (
            <div
              key={item.id}
              className="relative first-of-type:row-span-2 overflow-hidden rounded-lg"
            >
              <Link to={item.link}>
                <img
                  className=" w-full h-full object-cover rounded-lg hover:scale-105 duration-300	 "
                  src={item?.image}
                  alt=""
                />
                <span className=" rounded-[30px_0_0_0] absolute bottom-0 right-0 p-[5px_30px] sm:p-[5px_60px] hover:bg-orange-400 transition-all  hover:text-white bg-white ">
                  {item.text}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { Bannershop } from "../../components/bannerShop/Bannershop";
import { FilterCategory } from "../../components/FilterCategory/FilterCategory";
import { ResultProduct } from "../../components/ResultProduct/ResultProduct";

export const Shop = () => {
  document.title = "فروشگاه";
  return (
    <div className="max-w-[1400px] flex flex-col gap-10 w-full m-auto">
      <Bannershop />
      {/*  */}
      <div className="flex gap-3 p-[20px_0] md:flex-row flex-col-reverse">
        <ResultProduct />
        {/*  */}
        <FilterCategory />
      </div>
    </div>
  );
};

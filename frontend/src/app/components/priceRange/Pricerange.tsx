import Slider from "@mui/material/Slider";
import { useShoppingCart } from "../../context/shop-context";
import { useEffect, useState } from "react";
import { categoryANDbrand } from "../../services/queries";
import { Loadinginfinite } from "../loading/loadinginfinite";

export default function PriceRange() {
  const minDistance = 10;
  const { setSearchParams, Category, brand } = useShoppingCart();
  const Data = categoryANDbrand(Category, brand);
  const min = Data?.data?.minItem;
  const max = Data?.data?.maxItem;
  const [value, setValue] = useState<number[]>([min, max]);
  //
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return event;
    }
    setSearchParams((prev: any) => {
      prev.set("max", newValue[1]);
      prev.set("min", newValue[0]);
      return prev;
    });
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  useEffect(() => {
    setValue([min, max]);
  }, [max, min]);

  if (Data.isLoading)
    return (
      <div className="flex items-center justify-center ">
        <Loadinginfinite />
      </div>
    );
  return (
    <div className="w-full">
      <p>محدوده قیمت</p>
      <Slider
        style={{ width: "90%", display: "flex" }}
        className="m-auto"
        value={value}
        onChange={handleChange}
        disableSwap
        min={min}
        max={max}
      />

      <div className="flex justify-between ">
        <p className="text-[17px]">
          تا{" "}
          {!value[1]
            ? max?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : value[1]?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="text-[17px]">
          از{" "}
          {!value[0]
            ? min?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : value[0]?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
}

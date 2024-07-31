import { useParams } from "react-router-dom";
import { ProductsQuery } from "./services/queries";
import { Products } from "./type/type";

export const FilterApi = () => {
  const productsQuery = ProductsQuery();
  const { id } = useParams<{ id: any }>();

  //men
  const phoneCategory = productsQuery?.data?.items?.filter((item: Products) => {
    return item.category === "موبایل";
  });
  //women
  const consoleCategory = productsQuery?.data?.items?.filter(
    (item: Products) => {
      return item.category === "کنسول بازی";
    }
  );
  const randomItem = productsQuery?.data?.items?.filter((item: Products) => {
    return [item][0]._id.includes("5");
  });
  const MahsolatMortabat = (category: string) => {
    const data = productsQuery?.data?.items?.filter((item: Products) => {
      return [item][0].category?.includes(category) && item?._id !== id;
    });
    return data;
  };
  return { phoneCategory, consoleCategory, randomItem, MahsolatMortabat };
};

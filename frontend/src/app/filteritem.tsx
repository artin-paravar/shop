import { ProductsQuery } from "./services/queries";
import { Products } from "./type/type";

export const FilterApi = () => {
  const productsQuery = ProductsQuery();

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
  // const MahsolatMortabat = productsQuery?.data?.items?.filter(
  //   (item: Products) => {
  //     return [item][0]._id.includes("5");
  //   }
  // );

  return { phoneCategory, consoleCategory, randomItem };
};

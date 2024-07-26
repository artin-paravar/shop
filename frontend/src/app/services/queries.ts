import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getProduct,
  getProducts,
  Productsload,
  searchandFilterItem,
} from "./api";
// ////////////////

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["loadmoreProducts"],
    queryFn: Productsload,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.items.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },

    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
}
export function ProductsQuery() {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
}
export function ProductQuery(id: number) {
  return useQuery({
    queryKey: ["getProduct", { id }],
    queryFn: () => getProduct(id),
  });
}
export function searchProductQuery(Category: string, debounced: any) {
  return useQuery({
    queryKey: ["getProduct2", { Category, debounced }],
    queryFn: () => searchandFilterItem(debounced, Category),
  });
}

import { useInfiniteQuery } from "@tanstack/react-query";
import { Productsload } from "./api";

// ////////////////

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
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

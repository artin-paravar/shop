import { useInView } from "react-intersection-observer";
import { useShoppingCart } from "../../context/shop-context";
import { categoryitem } from "../../services/queries";
import { Products } from "../../type/type";
import { SkeletonPage } from "../loading/skeleton";
import { Product } from "../product/product";
import { useEffect } from "react";
import { Loadinginfinite } from "../loading/loadinginfinite";

export const ResultProduct = () => {
  const { Category } = useShoppingCart();
  const { ref, inView } = useInView();
  const itemCategory = categoryitem(Category);
  useEffect(() => {
    if (inView && itemCategory.hasNextPage) {
      itemCategory.fetchNextPage();
    }
  }, [inView, itemCategory.hasNextPage, itemCategory.fetchNextPage]);

  return (
    <div className="flex-1 w-full">
      {itemCategory.isLoading ? (
        <>
          <div className="lg:grid-cols-3 md:grid-cols-2 grid gap-4 place-items-center">
            <SkeletonPage cards={9} />
          </div>
        </>
      ) : (
        <div className="lg:grid-cols-3 md:grid-cols-2 grid gap-4 place-items-center">
          {Category !== "All"
            ? itemCategory?.data?.pages?.map((item: Products) => {
                return item?.items?.map(
                  ({ _id, image, price, title }: Products) => {
                    return (
                      <div key={_id} className="shadow-md rounded-2xl ">
                        <a target="_blank" key={_id} href={`product/${_id}`}>
                          <Product image={image} price={price} title={title} />
                        </a>
                      </div>
                    );
                  }
                );
              })
            : itemCategory?.data?.pages?.map((item: Products) => {
                return item?.items?.map(
                  ({ _id, image, price, title }: Products) => {
                    return (
                      <div key={_id} className="shadow-md rounded-2xl ">
                        <a target="_blank" key={_id} href={`product/${_id}`}>
                          <Product image={image} price={price} title={title} />
                        </a>
                      </div>
                    );
                  }
                );
              })}
        </div>
      )}
      <div className=" flex justify-center  m-[40px_0]">
        {itemCategory.isFetching && itemCategory.hasNextPage ? (
          <Loadinginfinite />
        ) : null}
        {itemCategory.hasNextPage ? <p ref={ref}> </p> : null}
      </div>
    </div>
  );
};

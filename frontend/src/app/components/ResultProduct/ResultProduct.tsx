import { useInView } from "react-intersection-observer";
import { useShoppingCart } from "../../context/shop-context";
import { categoryANDbrand, categoryitem } from "../../services/queries";
import { Products } from "../../type/type";
import { SkeletonPage } from "../loading/skeleton";
import { Product } from "../product/product";
import { useEffect, useState } from "react";
import { Loadinginfinite } from "../loading/loadinginfinite";

export const ResultProduct = () => {
  const { Category, brand } = useShoppingCart();
  const { ref, inView } = useInView();
  const [sort, setSort] = useState("default");
  const itemCategory = categoryitem(Category, brand);
  const AllItem = categoryANDbrand(Category, brand, sort);
  useEffect(() => {
    if (inView && itemCategory.hasNextPage) {
      itemCategory.fetchNextPage();
    }
  }, [inView, itemCategory.hasNextPage, itemCategory.fetchNextPage]);
  return (
    <div className="flex-1 w-full">
      <div className="m-auto w-full mb-12 ml flex items-center justify-center ">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="outline-none border p-1 rounded-lg"
          name="sort"
          id=""
        >
          <option value="default">مرتب‌سازی بر اساس جدید ترین</option>
          <option value="lowtohigh">مرتب‌سازی بر اساس ارزان ترین</option>
          <option value="hightolow">مرتب‌سازی بر اساس گران ترین</option>
        </select>
      </div>
      {itemCategory.isLoading ? (
        <>
          <div className="lg:grid-cols-3 md:grid-cols-2 grid gap-4 place-items-center">
            <SkeletonPage cards={9} />
          </div>
        </>
      ) : (
        <div className="lg:grid-cols-3 md:grid-cols-2 grid gap-4 place-items-center">
          {Category === "All"
            ? itemCategory?.data?.pages?.map((item: Products) => {
                return item?.items?.map(
                  ({ _id, productImage, price, title }: Products) => {
                    return (
                      <div key={_id} className="shadow-md rounded-2xl ">
                        <a target="_blank" key={_id} href={`product/${_id}`}>
                          <Product
                            productImage={productImage}
                            price={price}
                            title={title}
                          />
                        </a>
                      </div>
                    );
                  }
                );
              })
            : sort === "default"
            ? itemCategory?.data?.pages?.map((item: Products) => {
                return item?.items?.map(
                  ({ _id, productImage, price, title }: Products) => {
                    return (
                      <div key={_id} className="shadow-md rounded-2xl ">
                        <a target="_blank" key={_id} href={`product/${_id}`}>
                          <Product
                            productImage={productImage}
                            price={price}
                            title={title}
                          />
                        </a>
                      </div>
                    );
                  }
                );
              })
            : sort === "lowtohigh"
            ? AllItem?.data?.LowtoHighcategory?.map(
                ({ _id, productImage, price, title }: Products) => {
                  console.log(price);
                  return (
                    <div key={_id} className="shadow-md rounded-2xl ">
                      <a target="_blank" key={_id} href={`product/${_id}`}>
                        <Product
                          productImage={productImage}
                          price={price}
                          title={title}
                        />
                      </a>
                    </div>
                  );
                }
              )
            : AllItem?.data?.HightoLowcategory?.map(
                ({ _id, productImage, price, title }: Products) => {
                  console.log(price);
                  return (
                    <div key={_id} className="shadow-md rounded-2xl ">
                      <a target="_blank" key={_id} href={`product/${_id}`}>
                        <Product
                          productImage={productImage}
                          price={price}
                          title={title}
                        />
                      </a>
                    </div>
                  );
                }
              )}
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

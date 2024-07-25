import "./shop.css";
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../services/queries";
import { Product } from "./product";
import { LoadingPage } from "../components/loading/loading";
import { useInView } from "react-intersection-observer";
import { Loadinginfinite } from "../components/loading/loadinginfinite";

export function Shop() {
  const productsQuery = useProducts();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && productsQuery.hasNextPage) {
      productsQuery.fetchNextPage();
    }
  }, [inView, productsQuery.hasNextPage, productsQuery.fetchNextPage]);
  if (productsQuery.isLoading) return <LoadingPage />;
  //

  return (
    <div className="shop">
      <div className="w-full sm:p-0 p-4">
        <h1 className="shopTitle mb-4">All product</h1>
        <div className=" p-5 grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-end items-end gap-10">
          {productsQuery.data?.pages?.map((item, index) => (
            <Fragment key={index}>
              {item?.items.map(
                ({ category, _id, price, title, image, description }: any) => {
                  return (
                    <Link key={_id} to={`/shop/${_id}`}>
                      <Product
                        id={_id}
                        price={price}
                        description={description}
                        title={title}
                        image={image}
                        category={category}
                      />
                    </Link>
                  );
                }
              )}
            </Fragment>
          ))}
        </div>
        <div className=" flex justify-center  m-[40px_0]">
          {productsQuery.isFetching && productsQuery.hasNextPage ? (
            <Loadinginfinite />
          ) : null}
          {productsQuery.hasNextPage ? <p ref={ref}> </p> : null}
        </div>
      </div>
    </div>
  );
}

import "./shop.css";
import { FilterItem } from "../components/filter/filter";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../services/queries";
import { Product } from "./product";
import { LoadingPage } from "../components/loading/loading";
import { filterItem } from "../services/api";
import { useShoppingCart } from "../context/shop-context";

export function Shop() {
  const [Category, setcategory] = useState<string>("All");
  const [filteritem, setfilteritem] = useState<any>([]);

  useEffect(() => {
    filterItem(Category).then((result) => {
      setfilteritem(result);
    });
  }, [Category]);

  const productsQuery = useProducts();

  if (productsQuery.isLoading) return <LoadingPage />;
  //
  return (
    <div className="shop">
      <FilterItem category={Category} setcategory={setcategory} />

      <div className="w-full sm:p-0 p-4">
        <h1 className="shopTitle mb-4">Shop</h1>
        <div className="pb-5 flex  flex-wrap justify-center  items-center gap-10">
          {Category !== "All"
            ? filteritem?.map(
                ({ category, _id, price, title, image, description }: any) => {
                  return (
                    <Fragment key={_id}>
                      <Link key={_id} to={`/shop/${_id}`}>
                        <Product
                          id={_id}
                          price={price}
                          description={description}
                          SS
                          title={title}
                          image={image}
                          category={category}
                        />
                      </Link>
                    </Fragment>
                  );
                }
              )
            : productsQuery.data?.pages?.map((item, index) => (
                <Fragment key={index}>
                  {item?.map(
                    ({
                      category,
                      _id,
                      price,
                      title,
                      image,
                      description,
                    }: any) => {
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
          {productsQuery.hasNextPage && Category === "All" ? (
            <button
              className="p-4 w-full max-w-[250px] bg-black text-white rounded-lg"
              onClick={() => productsQuery.fetchNextPage()}
              disabled={
                !productsQuery.hasNextPage || productsQuery.isFetchingNextPage
              }
            >
              {productsQuery.isFetchingNextPage
                ? "Loading more..."
                : productsQuery.hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

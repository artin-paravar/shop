import "./shop.css";
import { FilterItem } from "../components/filter/filter";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../services/queries";
import { Product } from "./product";
import { LoadingPage } from "../components/loading/loading";

export function Shop() {
  const productsQuery = useProducts();
  const [Category, setcategory] = useState<string>("All");

  //
  if (productsQuery.isLoading) return <LoadingPage />;
  //
  // console.log(productsQuery.fetchNextPage());
  return (
    <div className="shop">
      <FilterItem category={Category} setcategory={setcategory} />

      <div className="w-full sm:p-0 p-4">
        <h1 className="shopTitle mb-4">Shop</h1>
        <div className="pb-5 flex  flex-wrap justify-center  items-center gap-10">
          {productsQuery.data?.pages.map((item, index) => (
            <Fragment key={index}>
              {item?.map(
                ({ category, _id, price, title, image, description }: any) => {
                  if (Category === "All" || category === Category) {
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
                }
              )}
            </Fragment>
          ))}
        </div>
        <div className="w-full flex justify-center  m-5">
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
        </div>
      </div>
    </div>
  );
}

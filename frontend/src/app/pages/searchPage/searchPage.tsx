import { Link, useSearchParams } from "react-router-dom";
import { Product } from "../../shop/product";
import { LoadingPage } from "../../components/loading/loading";
import { FilterItem } from "../../components/filter/filter";
import { useDebounce } from "../../components/debounce/usedebounce";
import { searchProductQuery } from "../../services/queries";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const Category = searchParams.get("category") || "All";
  const q = searchParams.get("q") as string;
  const debounced = useDebounce(q);

  const searchitem = searchProductQuery(Category, debounced);
  if (searchitem.isLoading) return <LoadingPage />;
  if (searchitem.data.items.length === 0) {
    return (
      <p className=" w-full h-[100vh] flex items-center justify-center text-[20px]">
        there is no result for your search
      </p>
    );
  }
  return (
    <>
      <div className="flex">
        <FilterItem />
        <div className="w-full sm:p-0 p-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 p-5 md:grid-cols-2 sm:grid-cols-1 justify-end items-end gap-7">
            {searchitem?.data?.items?.map(
              ({ category, _id, price, title, image, description }: any) => {
                return (
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
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

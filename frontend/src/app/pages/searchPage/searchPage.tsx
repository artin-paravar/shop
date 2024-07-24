import { useEffect, useState } from "react";
import { searchandFilterItem } from "../../services/api";
import { useShoppingCart } from "../../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../shop/product";
import { LoadingPage } from "../../components/loading/loading";
import { FilterItem } from "../../components/filter/filter";

export const SearchPage = () => {
  const [searchitem, setsearchitem] = useState<any>([]);
  const [loading, setloading] = useState<boolean>(true);
  const { inputData, Category, setcategory } = useShoppingCart();
  const navigate = useNavigate();

  useEffect(() => {
    searchandFilterItem(inputData, Category).then((result) => {
      setsearchitem(result.items);
      setloading(false);
      navigate(`/search/?q=${inputData}&&category=${Category}`);
      if (window.location.search == "?q=&&category=All") {
        navigate("/");
      }
    });
  }, [inputData, Category]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : searchitem.length <= 0 ? (
        <p className=" w-full h-[100vh] flex items-center justify-center text-[20px]">
          there is no result for your search
        </p>
      ) : (
        <>
          <div className="flex">
            <FilterItem category={Category} setcategory={setcategory} />
            <div className="w-full sm:p-0 p-4">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 p-5 md:grid-cols-2 sm:grid-cols-1 justify-end items-end gap-7">
                {searchitem?.map(
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
      )}
    </>
  );
};

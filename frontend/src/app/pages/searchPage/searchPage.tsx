import { useEffect, useState } from "react";
import { searchItem } from "../../services/api";
import { useShoppingCart } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { Product } from "../../shop/product";
import { LoadingPage } from "../../components/loading/loading";

export const SearchPage = () => {
  const [searchitem, setsearchitem] = useState<any>([]);
  const [loading, setloading] = useState<boolean>(true);
  const { inputData } = useShoppingCart();
  useEffect(() => {
    searchItem(inputData).then((result) => {
      setsearchitem(result);
      setloading(false);
    });
  }, [inputData]);

  return (
    <div className="flex flex-wrap w-full items-center p-3 gap-3 justify-evenly">
      {loading ? (
        <LoadingPage />
      ) : searchitem.length <= 0 ? (
        <p className="w-full h-[100vh] flex items-center justify-center text-[20px]">
          there is no result for your search
        </p>
      ) : (
        searchitem?.map(
          ({ category, _id, price, title, image, description }: any) => {
            return (
              <div key={_id} className=" mt-6 hover:scale-105 transition-all ">
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
              </div>
            );
          }
        )
      )}
    </div>
  );
};

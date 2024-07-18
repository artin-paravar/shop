import { useEffect, useState } from "react";
import { Product } from "./product";
import "./shop.css";
import { FilterItem } from "../components/filter/filter";
import { LoadingPage } from "../components/loading/loading";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

export function Shop() {
  const [Category, setcategory] = useState<string>("All");
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((result) => {
        if (result.data) {
          setProducts(result.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="shop">
      <FilterItem category={Category} setcategory={setcategory} />

      <div className="w-full sm:p-0 p-4">
        <h1 className="shopTitle mb-4">Shop</h1>
        <div className="pb-5 flex  flex-wrap justify-center  items-center gap-10">
          {Loading ? (
            <LoadingPage />
          ) : (
            Products.map(
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
            )
          )}
        </div>
      </div>
    </div>
  );
}

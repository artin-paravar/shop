import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";
import { categoryitem, ProductsQuery } from "../../services/queries";
import { Products } from "../../type/type";
import { SkeletonPage } from "../loading/skeleton";
import { Product } from "../product/product";

export const ResultProduct = () => {
  const { Category } = useShoppingCart();
  const Allproducts = ProductsQuery();

  const itemCategory = categoryitem(Category);
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
            ? itemCategory?.data?.items?.map((items: Products) => {
                return (
                  <div key={items._id} className="shadow-md rounded-2xl ">
                    <a
                      target="_blank"
                      key={items._id}
                      href={`product/${items._id}`}
                    >
                      <Product
                        image={items.image}
                        price={items.price}
                        title={items.title}
                      />
                    </a>
                  </div>
                );
              })
            : Allproducts?.data?.items?.map((items: Products) => {
                return (
                  <div key={items._id} className="shadow-md rounded-2xl ">
                    <a
                      target="_blank"
                      key={items._id}
                      href={`product/${items._id}`}
                    >
                      <Product
                        image={items.image}
                        price={items.price}
                        title={items.title}
                      />
                    </a>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

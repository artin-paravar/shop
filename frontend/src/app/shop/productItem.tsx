import { useParams } from "react-router-dom";
import { Buttons } from "../components/buttons/buttons";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { LoadingPage } from "../components/loading/loading";
import { useShoppingCart } from "../context/shop-context";

export default function ProductItem() {
  const { id } = useParams<{ id: any }>();
  const [Product, setProducts] = useState<any>([]);
  const [Loading, setLoading] = useState(true);
  const { localhost } = useShoppingCart();

  useEffect(() => {
    getProduct(id).then((result) => {
      setProducts(result.item);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {Loading ? (
        <LoadingPage />
      ) : (
        <div className=" p-[50px_10px] flex items-center justify-center flex-col gap-3">
          <div className="flex lg:flex-row flex-col justify-center items-center ">
            <img
              src={`${localhost}/images/` + Product.image}
              alt="/"
              className="max-w-[500px] max-h-[500px] object-contain w-full"
            />
            <div className=" gap-7 sm:text-[20px] text-[17px] flex flex-col justify-evenly max-w-[800px] h-[500px] p-[0_30px] sm:p-[0_20px]">
              <h1 className="flex  items-start gap-2 flex-col lg:flex-row">
                <b>name:</b> <p>{Product.title}</p>
              </h1>
              <h1 className="flex items-start gap-2 flex-col lg:flex-row">
                <b>description:</b> <p>{Product.description}</p>
              </h1>
              <h1>
                <b>price:</b> ${Product.price}
              </h1>
              <Buttons itemId={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

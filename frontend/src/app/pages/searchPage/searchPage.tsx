import { useNavigate } from "react-router-dom";
import { Product } from "../../components/product/product";
import { useDebounce } from "../../components/debounce/usedebounce";
import { searchProductQuery } from "../../services/queries";
import { useShoppingCart } from "../../context/shop-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loadinginfinite } from "../../components/loading/loadinginfinite";
import { OPEN } from "../../type/type";

export const SearchPage = ({ setopen }: OPEN | any) => {
  const { q } = useShoppingCart();
  const debounced = useDebounce(q);
  const { ref, inView } = useInView();
  const searchitem = searchProductQuery(debounced);
  const navigate = useNavigate();
  const handelnavigate = (id: string) => {
    setopen(false);
    navigate(`product/${id}`);
  };
  //
  useEffect(() => {
    if (inView && searchitem.hasNextPage) {
      searchitem.fetchNextPage();
    }
  }, [inView, searchitem.hasNextPage, searchitem.fetchNextPage]);

  if (searchitem.isLoading)
    return (
      <div className=" w-full mt-10 flex items-center justify-center text-[20px]">
        <Loadinginfinite />
      </div>
    );
  if (!q)
    return (
      <div className=" w-full mt-10 flex items-center justify-center text-[20px]"></div>
    );

  if (searchitem.data?.pages[0].items.length <= 0) {
    return (
      <p className=" w-full mt-10 flex items-center justify-center text-[20px]">
        نتیجه ای یافت نشد
      </p>
    );
  }
  return (
    <>
      <div className="flex">
        <div className="w-full sm:p-0 p-4 ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 pt-3 md:grid-cols-2 sm:grid-cols-1 justify-end items-end gap-7">
            {searchitem?.data?.pages?.map((item) =>
              item?.items?.map(
                ({
                  category,
                  _id,
                  price,
                  title,
                  productImage,
                  description,
                }: any) => {
                  return (
                    <div
                      key={_id}
                      className="cursor-pointer"
                      onClick={() => handelnavigate(_id)}
                    >
                      <div className="md:border-l border-b p-2 rounded-lg">
                        <Product
                          id={_id}
                          price={price}
                          description={description}
                          title={title}
                          productImage={productImage}
                          category={category}
                        />
                      </div>
                    </div>
                  );
                }
              )
            )}
          </div>
          <div className=" flex justify-center  m-[40px_0]">
            {searchitem.isFetching && searchitem.hasNextPage ? (
              <Loadinginfinite />
            ) : null}
            {searchitem.hasNextPage ? <p ref={ref}> </p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

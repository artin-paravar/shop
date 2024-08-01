import { Link } from "react-router-dom";
import { CartItem } from "./cart-item";

import { useShoppingCart } from "../../context/shop-context";
import { Products } from "../../type/type";
import { ProductsQuery } from "../../services/queries";
import { LoadingPage } from "../../components/loading/loading";

export default function Cart() {
  const Products = ProductsQuery();
  const { cartItems, getTotalcartAmount } = useShoppingCart();
  document.title = "سبد خرید";
  if (Products.isLoading) return <LoadingPage />;
  if (getTotalcartAmount() <= 0) {
    return (
      <h1 className="h-[90vh] flex items-center justify-center">
        سبد خرید شما خالی است
      </h1>
    );
  }
  return (
    <>
      <div className="flex flex-col min-h-[600px] max-w-[1200px]  m-auto w-full p-4 mt-6">
        <h1 className="text-[37px] mb-5 md:text-start text-center">سبد خرید</h1>
        <div className="flex md:flex-row  flex-col   w-full gap-3 h-full">
          <div className="flex flex-col gap-3 flex-1 w-full">
            {Products?.data?.items?.map((item: Products) => {
              if (cartItems[item._id] > 0)
                return <CartItem key={item._id} {...item} id={item._id} />;
            })}
          </div>

          <div className="border md:max-w-[350px] w-full md:gap-0 gap-8   sm:h-[400px] border-black rounded-lg flex-1 p-4 justify-around flex flex-col">
            <b className="text-[16px]">جمع کل سبد خرید</b>
            {/*  */}
            <div
              className="w-full flex gap-4 items-center
              "
            >
              جمع جزء :{" "}
              <b>
                {getTotalcartAmount()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </b>
            </div>
            {/*  */}
            <div className="flex items-center gap-3">
              <span>حمل و نقل :</span>
              <span>
                نرخ ثابت : <b>40,000 تومان</b>
              </span>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                مجموع{" "}
                <b>
                  {Number(getTotalcartAmount() + 40000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </b>
              </div>
            </div>
            <Link
              to={"#"}
              className="w-full bg-orange-400 text-white text-center p-3 rounded-lg"
            >
              ادامه جهت تسویه حساب
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

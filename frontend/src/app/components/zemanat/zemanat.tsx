import { CiDeliveryTruck } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { LuUserSquare2 } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";

export const Zemanat = () => {
  return (
    <div className="w-full m-[40px_0] border-t-2 border-b-2 border-gray-100 ">
      <div className="container m-auto">
        <div className="grid grid-cols-1 place-items-start gap-4 sm:grid-cols-2 md:grid-cols-4 p-[30px_0]">
          {/* 1 */}
          <div className="flex  2xl:flex-row md:flex-col items-center justify-center gap-3">
            <span className="text-[29px] p-4 flex items-center justify-center border-gray-300 border rounded-full">
              <CiDeliveryTruck />
            </span>
            <div className="flex flex-col  text-[17px]">
              <p className="md:text-center 2xl:text-start text-[16px]">
                ارسال رایگان
              </p>
              <p className="text-gray-500 text-center text-[17px]">
                ارسال رایگان سفارشات بالای 1 م.ت
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex  2xl:flex-row md:flex-col items-center justify-center gap-3">
            <span className="text-[29px] p-4 flex items-center justify-center border-gray-300 border rounded-full">
              <GiReceiveMoney />
            </span>
            <div className="flex flex-col  text-[17px]">
              <p className=" md:text-center 2xl:text-start text-[16px]">
                {" "}
                تضمین بازگشت وجه
              </p>
              <p className="text-gray-500 text-[17px] text-center">
                ضمانت بازگشت وجه تا 30 روز
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex  items-center justify-center gap-3 2xl:flex-row md:flex-col">
            <span className="text-[29px] p-4 flex items-center justify-center border-gray-300 border rounded-full">
              <LuUserSquare2 />
            </span>
            <div className="flex flex-col  text-[17px] ">
              <p className="text-[16px] md:text-center 2xl:text-start">
                {" "}
                پشتیبانی آنلاین
              </p>
              <p className="text-gray-500 text-[17px] text-center ">
                پشتیبانی دوستانه 24/7
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex  items-center justify-center gap-3  2xl:flex-row md:flex-col ">
            <span className="text-[29px] p-4 flex items-center justify-center border-gray-300 border rounded-full">
              <CiCreditCard1 />
            </span>
            <div className="flex flex-col  text-[17px] ">
              <p className="text-[16px] md:text-center 2xl:text-start">
                {" "}
                پرداخت امن
              </p>
              <p className="text-gray-500 text-[17px] text-center">
                پرداخت با تمامی کارت های بانکی
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

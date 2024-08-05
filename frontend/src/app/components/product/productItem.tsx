import { useParams } from "react-router-dom";
import { Buttons } from "../buttons/buttons";
import { IoIosArrowBack } from "react-icons/io";
import { LoadingPage } from "../loading/loading";
import { ProductQuery } from "../../services/queries";
import { useState } from "react";
import { CommentSection } from "../commentSection.tsx/Comment";
import { FilterApi } from "../../filteritem";
import SliderMoshabeh from "../slider/sliderMoshabeh";
import SliderThumbs from "../slider/sliderTumbs";

export default function ProductItem() {
  const { id } = useParams<{ id: string | undefined }>();
  const [choose, SetChoose] = useState("tozih");
  const [Moshahede, SetMoshahede] = useState(false);

  const Product = ProductQuery(id as string);
  //
  const { MahsolatMortabat } = FilterApi();


    document.title = Product?.data?.item?.title;
  
  if (Product.isLoading) return <LoadingPage />;

  return (
    <>
      <div className="  xl:container xl:m-auto p-[50px_10px] h-full flex items-center justify-center flex-col gap-8">
        <div className="flex lg:flex-row  flex-col justify-center lg:gap-2 gap-10">
          <SliderThumbs data={Product?.data?.item} />

          <div className="mt-5 gap-7 sm:text-[20px] text-[17px] flex flex-col  max-w-[800px]  p-[0_30px] sm:p-[0_20px]">
            {/*  */}
            <h1 className="flex text-2xl  text-justify items-start gap-2 flex-col lg:flex-row">
              {Product?.data?.item?.title}
            </h1>
            {/*  */}
            <h1 className="text-3xl">
              {Product?.data?.item?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </h1>

            <hr />

            <h3 className="text-[16px] text-gray-500 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون لازم است و برای شرایط
              فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد.
            </h3>

            <h3>دسته بندی : {Product?.data?.item?.category}</h3>

            <h3>برند : {Product?.data?.item?.brand}</h3>
            <Buttons itemId={id} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="p-4 mb-8 gap-4 flex  items-center text-xl">
            <span
              onClick={() => SetChoose("tozih")}
              className={
                choose === "tozih"
                  ? "cursor-pointer active border-b-2 pb-1 border-black"
                  : "cursor-pointer"
              }
            >
              توضیحات
            </span>
            <span
              onClick={() => SetChoose("comments")}
              className={
                choose === "comments"
                  ? "cursor-pointer active border-b-2 pb-1 border-black"
                  : "cursor-pointer"
              }
            >
              نظرات
            </span>
          </div>
          {/*  */}
          <div className="s p-2  flex flex-col w-full">
            {choose === "tozih" ? (
              <>
                <h1 className="  flex text-justify  text-md text-gray-600 leading-8	 items-start gap-2 flex-col ">
                  {Moshahede
                    ? Product?.data?.item?.description
                    : Product?.data?.item?.description.slice(0, 551) + "..."}
                  <span
                    onClick={() => SetMoshahede(!Moshahede)}
                    className=" cursor-pointer flex text-sm  items-center justify-center  gap-1 text-blue-400"
                  >
                    مشاهده بیشتر <IoIosArrowBack className="text-sm" />
                  </span>
                </h1>
              </>
            ) : (
              <CommentSection />
            )}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="m-[40px_auto] max-w-[900px] md:p-0 p-5">
        <div className="flex flex-col">
          <SliderMoshabeh
            data={MahsolatMortabat(Product?.data?.item?.category, id)}
            title="محصولات مرتبط"
          />
        </div>
      </div>
    </>
  );
}

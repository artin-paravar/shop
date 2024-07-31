import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import "swiper/css/free-mode";
import { Products } from "../../type/type";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FreeMode } from "swiper/modules";

import { SkeletonPage } from "../loading/skeleton";
import { Product } from "../../shop/product";

function SliderMoshabeh({ data, title }: Products) {
  const slider = useRef<any>(null);
  // const handelNavigate = (id: any) => {
  //   window.location.replace(`/product/${id}`);
  // };
  return (
    <div className=" w-full bg-white  rounded-2xl p-3 shadow-[2px_0px_20px_2px_lightgray]">
      <h1 className="text-center sm:text-[28px] text-[20px] m-[10px_0]">
        {title}
      </h1>

      <Swiper
        onSwiper={(it) => (slider.current = it)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        modules={[FreeMode]}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        breakpoints={{
          "1024": {
            slidesPerView: 2,
          },
          "620": {
            slidesPerView: 2,
          },
          "480": {
            slidesPerView: 1,
          },
        }}
      >
        {data ? (
          data?.map((items: Products) => {
            return (
              <SwiperSlide
                className="border-l border-l-gray-200"
                key={items?._id}
              >
                <span
                  className="cursor-pointer"
                  // onClick={() => handelNavigate(items?._id)}
                >
                  <Product
                    image={items.image}
                    price={items.price}
                    title={items.title}
                  />
                </span>
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide className="border-l border-l-gray-200">
              <SkeletonPage />
            </SwiperSlide>{" "}
            <SwiperSlide className="border-l border-l-gray-200">
              <SkeletonPage />
            </SwiperSlide>{" "}
            <SwiperSlide className="border-l border-l-gray-200">
              <SkeletonPage />
            </SwiperSlide>
          </>
        )}
        {data ? (
          <>
            {" "}
            <button
              className="arrow-left arrow absolute flex  items-center justify-center  z-[99]  border border-gray-300   rounded-[50%] w-[40px] text-[17px]  h-[40px] bg-white translate-x-2 text-gray-500  top-[40%] left-0  "
              onClick={() => slider.current?.slideNext()}
            >
              <SlArrowLeft />
            </button>
            <button
              className="arrow-right arrow absolute flex items-center justify-center  z-[99]  border border-gray-300  rounded-[50%] w-[40px] text-[17px]  h-[40px] bg-white text-gray-500  top-[40%] right-0 translate-x-[-10px]  "
              onClick={() => slider.current?.slidePrev()}
            >
              <SlArrowRight />
            </button>
          </>
        ) : (
          ""
        )}
      </Swiper>
    </div>
  );
}

export default SliderMoshabeh;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Assests } from "../../assets/assets";
import { IMG } from "../../type/type";
function BannerSlider() {
  const slider = useRef<any>(null);
  const { banner }: any = Assests();

  return (
    <Swiper
      modules={[Autoplay]}
      style={{ height: "450px" }}
      onSwiper={(it) => (slider.current = it)}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
    >
      {banner?.map((item: IMG) => {
        return (
          <SwiperSlide
            style={{ height: "100%" }}
            key={item.id}
            className="w-full h-[300px] outline-none sm:h-[500px]"
          >
            <img
              className="w-full h-full sm:object-cover  object-cover"
              src={item?.image}
              alt=""
            />
          </SwiperSlide>
        );
      })}
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
    </Swiper>
  );
}
export default BannerSlider;

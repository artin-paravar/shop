import BannerSlider from "../../components/slider/sliderBanner";
import { CategoryUI } from "../../components/CategoryUI/CategoryUI";
import SliderItem from "../../components/slider/slider";
import { FilterApi } from "../../filteritem";
import { Porforosh } from "../../components/Porforosh/Porforosh";
import { Zemanat } from "../../components/zemanat/zemanat";

export function Home() {
  const { phoneCategory, consoleCategory, randomItem } = FilterApi();
  document.title = "فروشگاه";
  return (
    <main>
      <div className=" p-[10px] sm:p-0  ">
        {/* banner */}
        <BannerSlider />
        <div className="container m-auto rounded-lg p-2 lg:p-0 flex flex-col gap-10 mt-3">
          {/* category */}
          <CategoryUI />
          {/* slider */}
          <SliderItem data={phoneCategory} title="انواع موبایل" />
          {/* Porforosh */}
          <Porforosh data={randomItem} title="پرفروش ترین " />
          {/* slider */}
          <SliderItem data={consoleCategory} title="انواع کنسول بازی" />
        </div>
        {/* zemanat */}
        <Zemanat />
      </div>
    </main>
  );
}

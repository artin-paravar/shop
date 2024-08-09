import "./custom.css";
import "./customTumbnail.css";
import Slider from "react-slick";
import { Products } from "../../type/type";
function SliderThumbs(data: Products) {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={data.data.productImage[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    with: {},
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.data.productImage.map((item: string) => (
        <img key={item} className="object-contain " src={item} alt="" />
      ))}
    </Slider>
  );
}
export default SliderThumbs;

import { Link } from "react-router-dom";
import { Assests } from "../../assets/assets";

export const Bannershop = () => {
  const { bannerShop } = Assests();

  return (
    <div className="relative  text-white">
      <img
        className="max-h-[500px] w-full m-auto  object-cover"
        src={bannerShop}
        alt=""
      />
      <div className="absolute mr-10 flex flex-col gap-2 top-1/2 right-0">
        <h1 className="text-[35px]">{document.title}</h1>
        <div className="flex text-sm gap-1 text-gray-200">
          <Link to={"/"}>خانه</Link> {" / "} <span>فروشگاه</span>
        </div>
      </div>
    </div>
  );
};

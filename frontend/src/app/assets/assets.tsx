import { footer, IMG } from "../type/type";
import banner1 from "./bannerimg/27a2380685ac70c5f801eeedbab9d28976d96f4b_1709365740.jpg";
import banner2 from "./bannerimg/e1272decb672540df5818e3200f843b5a2596b99_1720688747.jpg";
import categoryimg1 from "./categoryimg/HkdMToxijoHfz4JwUgfh3G-1920-80.jpg.webp";
import categoryimg2 from "./categoryimg/gsmarena_000.jpg";
import categoryimg3 from "./categoryimg/jM9JCM8RBSykEorEqDqpzW-970-80.jpg.webp";
export const Assests = () => {
  const banner: IMG[] = [
    { id: 1, image: banner1 },
    { id: 3, image: banner2 },
  ];
  const categoryimg: IMG[] = [
    {
      id: 1,
      image: categoryimg1,
      text: "کنسول های بازی",
      link: "/playstation",
    },
    {
      id: 2,
      image: categoryimg2,
      text: "موبایل",
      link: "/phone",
    },
    { id: 3, image: categoryimg3, text: "اسپیکر", link: "/speakers " },
  ];
  const item1footer: footer[] = [
    { id: 1, text: "دسترسی سریع" },
    { id: 2, text: "حساب کاربری من" },
    { id: 3, text: "سبد خرید" },
    { id: 4, text: "لیست علاقه مندی" },
    { id: 5, text: "پیگیری سفارش" },
  ];
  const item2footer: footer[] = [
    { id: 1, text: "اطلاعات" },
    { id: 2, text: "حریم خصوصی" },
    { id: 3, text: "خط مشی بازپرداخت" },
    { id: 4, text: "ارسال و مرجوعی" },
    { id: 5, text: "قوانین و مقررات" },
  ];

  return { banner, categoryimg, item1footer, item2footer };
};

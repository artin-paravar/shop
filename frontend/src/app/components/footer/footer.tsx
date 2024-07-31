import { Link } from "react-router-dom";
import { Assests } from "../../assets/assets";

export const Footer = () => {
  const { item1footer, item2footer } = Assests();

  return (
    <div>
      <footer className="bg-white dark:bg-black  text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="lg:flex md:justify-between ">
            <div className="w-full lg:max-w-[400px] flex flex-col gap-2 p-2 mb-6 lg:mb-0 text-white">
              <h2>فروشگاه ما</h2>
              <p className="text-[15px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است،
              </p>
            </div>
            <div className="w-full grid grid-cols-2  gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2 ">
                {item1footer?.map((item) => {
                  return (
                    <Link
                      className="first-of-type:font-bold"
                      key={item.id}
                      to={"#"}
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>

              <div>
                <div className="w-full flex flex-col gap-2 ">
                  {item2footer?.map((item) => {
                    return (
                      <Link
                        className="first-of-type:font-bold"
                        key={item.id}
                        to={"#"}
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2  justify-center">
                <h1 className="text-[25px]">با ما در ارتباط باشید</h1>
                <span className="text-[14px]">
                  عضو خبرنامه ما شوید و 10% تخفیف دریافت کنید
                </span>
                <input
                  className="p-2 w-full text-black rounded-lg"
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className=" flex items-center justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © کپی رایت 1402. تمامی حقوق محفوظ است.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

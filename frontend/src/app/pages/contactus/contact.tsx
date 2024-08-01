export const Contact = () => {
  document.title = "تماس با ما";

  return (
    <div className="isolate m-auto mt-16 max-w-[1000px] bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffbb00] to-[#ffffff] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className=" max-w-2xl mb-10 text-right flex flex-col gap-4">
        <p className="mt-2 text-[42px] leading-8 ">
          <b>ما اینجا هستیم برای شما</b>
        </p>
        <h2 className="sm:text-lg">تماس با ما</h2>
      </div>
      <div className="flex gap-10 flex-col sm:flex-row ">
        <form
          action="https://fabform.io/f/xxxxx"
          method="post"
          className=" max-w-xl flex-1 "
        >
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm  leading-6 text-gray-900"
              >
                نام شما
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2"></div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm  leading-6 text-gray-900"
              >
                ایمیل شما
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm  leading-6 text-gray-900"
              >
                شماره تلفن
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm  leading-6 text-gray-900"
              >
                موضوع
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm  text-white shadow-sm hover:bg-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ارسال پیام
            </button>
          </div>
        </form>
        <div className="mt-8 flex flex-col gap-3 flex-1">
          <span className="text-3xl">آدرس فروشگاه</span>
          <p className="text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className="grid grid-cols-2 mt-4 gap-4">
            <div className="flex flex-col gap-1 ">
              <span className="text-[18px]">فروشگاه تهران</span>
              <p className="text-gray-500 text-sm">
                ایران، استان تهران، تهران، خیابان آزادی، آزادی 1
                <br />
                02112345678، 02187654321
              </p>
            </div>{" "}
            <div className="flex flex-col gap-1 ">
              <span className="text-[18px]">فروشگاه تهران</span>
              <p className="text-gray-500 text-sm">
                ایران، استان تهران، تهران، خیابان آزادی، آزادی 1
                <br />
                02112345678، 02187654321
              </p>
            </div>{" "}
            <div className="flex flex-col gap-1 ">
              4<span className="text-[18px]">فروشگاه تهران</span>
              <p className="text-gray-500 text-sm">
                ایران، استان تهران، تهران، خیابان آزادی، آزادی 1
                <br />
                02112345678، 02187654321
              </p>
            </div>{" "}
            <div className="flex flex-col gap-1 ">
              <span className="text-[18px]">فروشگاه تهران</span>
              <p className="text-gray-500 text-sm">
                ایران، استان تهران، تهران، خیابان آزادی، آزادی 1
                <br />
                02112345678، 02187654321
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

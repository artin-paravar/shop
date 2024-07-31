import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="h-[100vh] w-full bg-white flex items-center justify-center absolute top-0 left-0 z-[999]  ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className=" text-3xl">صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
          <Link
            to="/"
            className="inline-flex  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SearchPage } from "../../pages/searchPage/searchPage";

export const Search = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { searchParams, setSearchParams } = useShoppingCart();
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  //
  const q = searchParams.get("q")?.toLowerCase().trim() as string;
  //
  const handelsearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!q) {
      return null;
    } else {
      navigate(`/search/?q=${q}`);
    }
  };

  return (
    <>
      <span className="cursor-pointer" onClick={() => setOpen(true)}>
        <IoIosSearch className="text-3xl" />
      </span>
      <div
        className={
          open
            ? " overflow-scroll fixed transition-all translate-y-0 bg-white w-full h-[100vh]  top-0 left-0 z-[999] sm:p-40 p-10"
            : " fixed bg-white w-full h-[100vh]  top-0 left-0 z-[999] p-40 translate-y-full transition-all"
        }
      >
        <span
          onClick={() => setOpen(false)}
          className="absolute top-0 left-0 border rounded-full p-1 m-3 border-gray-400  cursor-pointer
            "
        >
          <IoMdClose className="text-3xl text-gray-700 hover:animate-pulse" />
        </span>
        <div className=" sm:m-0 mt-14 w-full flex flex-col justify-center items-center m-auto">
          <form
            onSubmit={handelsearch}
            className="flex  border-gray-300 border-b w-full  m-auto items-center  justify-center"
          >
            <input
              onChange={(e) =>
                setSearchParams(
                  (prev: any) => {
                    prev.set("q", e.target.value);

                    return prev;
                  },
                  { replace: true }
                )
              }
              type="text"
              value={q ? (searchParams?.get("q") as string) : ""}
              className=" w-full p-6 outline-none  "
              placeholder="جستجوی محصول"
            />
            <button
              type="submit"
              className="text-white bg-orange-400 rounded-[10px] p-[9px]"
            >
              جستجو
            </button>
          </form>
        </div>
        <SearchPage setopen={setOpen} />
      </div>
    </>
  );
};

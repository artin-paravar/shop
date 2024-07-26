import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/shop-context";

export const Search = () => {
  const navigate = useNavigate();

  const { searchParams, setSearchParams } = useShoppingCart();
  //
  const Category = searchParams.get("category") || "All";
  const q = searchParams.get("q") as string;
  //
  const handelsearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!q) {
      toast.error("type something");
    } else {
      navigate(`/search/?q=${q}&&category=${Category}`);
    }
  };

  return (
    <form
      onSubmit={handelsearch}
      className="flex  ml-3 w-full sm:w-auto items-center  justify-center"
    >
      <input
        onChange={(e) =>
          setSearchParams(
            (prev: any) => {
              prev.set("q", e.target.value);
              prev.set("category", "All");

              return prev;
            },
            { replace: true }
          )
        }
        type="text"
        value={q ? (searchParams?.get("q") as string) : ""}
        className="sm:w-auto w-full p-[6px] outline-none"
      />
      <button type="submit" className="text-white bg-blue-500  p-[6px]">
        search
      </button>
    </form>
  );
};

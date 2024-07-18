import { useShoppingCart } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export const Profile = () => {
  const Navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [UserData, setUserData] = useState<any>({});
  const { setToken, user } = useShoppingCart();

  const handelLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setshow(false);
    Navigate("/");
    toast.success("logout succesfull");
  };
  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, [user]);
  return (
    <div className="flex w-full justify-between p-4 flex-col">
      <div className="flex flex-col gap-5 p-2">
        <div>
          <h2>
            your name :
            <span className="text-red-500"> {UserData?.fullname}</span>
          </h2>
        </div>
        <div>
          <h2>
            your email :{" "}
            <span className="text-red-500"> {UserData?.email}</span>
          </h2>
        </div>
      </div>

      <button
        onClick={() => setshow(true)}
        className="p-2 bg-black text-white rounded-md flex items-center justify-center "
      >
        logout
      </button>

      <>
        {show ? (
          <div className="  text-[25px] gap-5 items-center justify-center flex flex-col w-[300px] bg-white absolute top-[50%]  shadow-[0px_0px_0px_3000px_rgba(0,0,0,0.4)]  left-[50%] transform translate-x-[-50%] translate-y-[-50%]  h-[300px] z-[999]">
            <span
              onClick={() => setshow(false)}
              className="absolute cursor-pointer  top-0 left-0 w-[30px] h-[30px] flex items-center justify-center text-[30px] p-4 "
            >
              x
            </span>
            <p>are you sure?</p>
            <button
              className="text-white w-[50%] rounded-md p-5 bg-black text-[25px] cursor-pointer"
              onClick={handelLogout}
            >
              logout
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};
``;

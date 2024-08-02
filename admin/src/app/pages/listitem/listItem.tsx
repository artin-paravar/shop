import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
type Host = {
  host: string;
};
export const ListItem = ({ host }: Host) => {
  const [list, setlist] = useState<any>([]);
  const fetchlist = async () => {
    const res = await axios.get(`${host}/api/shopitem/list`);
    if (res.data) {
      setlist(res.data.items);
    } else {
      toast.error("Error");
    }
  };
  const removefood = async (itemid: string) => {
    console.log(itemid);
    const res = await axios.post(`${host}/api/shopitem/remove`, {
      id: itemid,
    });
    await fetchlist();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <div>
      {list.length > 0 ? <p>همه ایتم ها</p> : <p>ایتمی وجود ندارد</p>}
      <div className="flex-col-reverse flex w-full">
        {list.map((item: any) => {
          return (
            <div key={item._id}>
              <div
                className="flex bg-black text-white p-4
            "
              >
                <div className="flex  flex-wrap  lg:m-0  gap-5 ">
                  {item?.productImage?.map((item: any) => {
                    return (
                      <div key={item} className="max-w-[300px] ">
                        <img className=" w-full h-full" src={item} alt="" />
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-5  ">
                    <p>
                      قیمت{" "}
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <p>نام محصول : {item.title}</p>
                    <p>دسته بندی:{item.category}</p>
                    <p>برند:{item.brand}</p>
                    <b
                      className="cursor-pointer"
                      onClick={() => removefood(item._id)}
                    >
                      حذف ایتم
                    </b>
                  </div>
                </div>
              </div>
              <hr className="m-6 bg-black border border-black h-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "../../helpers/uploadimage";
import { MdDelete } from "react-icons/md";

type Host = {
  host: string;
};
const Additem = ({ host }: Host) => {
  const [data, setdata] = useState({
    title: "",
    description: "",
    price: "",
    productImage: [],
    category: "موبایل",
  });
  //
  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setdata((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  //
  const handleDeleteProductImage = async (index: number) => {
    console.log("image index", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setdata((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };
  //
  const handleUploadProduct = async (e: any) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    setdata((data: any) => {
      return {
        ...data,
        productImage: [...data.productImage, uploadImageCloudinary.url],
      };
    });
  };
  //
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.category === "") {
      toast.error("دسته بندی را وارد کنید");
      return null;
    }
    if (data.title === "") {
      toast.error("نام محصول را وارد کنید");
      return null;
    }

    if (data.price === "") {
      toast.error("قیمت را وارد کنید");
      return null;
    }
    if (data.description === "") {
      toast.error("توضیح را وارد کنید");
      return null;
    }

    const res = await axios.post(`${host}/api/shopitem/add`, data);
    console.log(res.data);

    if (res.data.success) {
      setdata({
        title: "",
        productImage: [],
        description: "",
        price: "",
        category: "",
      });
      toast.success(res.data.message);
    } else {
      console.log("error");
      toast.error(res.data.message);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-[400px] m-auto gap-3 p-4 shadow-2xl"
      >
        <p>اپلود عکس</p>
        <label htmlFor="image">
          <img
            className="w-full border-black border rounded-md m-auto h-[250px] object-fill"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I919ABWKPGoGN6hOCX_RVRRLhmLUhrhZDQ&s"
            }
            alt=""
          />
        </label>
        <input hidden type="file" id="image" onChange={handleUploadProduct} />
        {data?.productImage[0] ? (
          <div className="flex items-center gap-2">
            {data.productImage.map((el, index) => {
              return (
                <div className="relative group">
                  <img
                    src={el}
                    alt={el}
                    width={80}
                    height={80}
                    className="bg-slate-100 border cursor-pointer"
                  />

                  <div
                    className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                    onClick={() => handleDeleteProductImage(index)}
                  >
                    <MdDelete />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-red-600 text-xs">لطفا یک عکس وارد کنید</p>
        )}
        <hr />
        <p>نام محصول</p>
        <input
          className=" border border-black rounded-md p-2"
          type="text"
          name="title"
          value={data.title}
          onChange={onChangeHandler}
        />
        <p>product description</p>

        <textarea
          placeholder="description"
          className=" border border-black rounded-md p-2"
          name="description"
          rows={6}
          onChange={onChangeHandler}
          value={data.description}
        />
        <p>product category</p>
        <select
          className=" border border-black rounded-md p-2"
          name="category"
          onChange={onChangeHandler}
        >
          <option value="موبایل">موبایل</option>
          <option value="ساعت هوشمند">ساعت هوشمند</option>
          <option value="اسپیکر">اسپیکر</option>
          <option value="کنسول بازی">کنسول بازی</option>
        </select>
        <p>product price</p>
        <input
          onChange={onChangeHandler}
          className=" border border-black rounded-md p-2"
          value={data.price}
          type="number"
          name="price"
          placeholder="$20"
        />
        <button type="submit" className="text-white bg-black p-4">
          اضافه کردن ایتم
        </button>
      </form>
    </div>
  );
};
export default Additem;

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
type Host = {
  host: string;
};
const Additem = ({ host }: Host) => {
  const [image, setimage] = useState<any>(false);
  const [data, setdata] = useState({
    title: "",
    description: "",
    price: "",
    category: "موبایل",
  });
  //
  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setdata((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, category, price } = data;
    const formData: any = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    const res = await axios.post(`${host}/api/shopitem/add`, formData);
    console.log(res.data);
    if (res.data.success) {
      setdata({ title: "", description: "", price: "", category: "" });
      setimage(false);
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
        className="flex flex-col w-[400px] m-auto gap-3 p-4 bg-black"
      >
        <p>upload image</p>
        <label htmlFor="image">
          <img
            className="w-full  m-auto h-[250px] object-cover"
            src={
              image
                ? URL.createObjectURL(image)
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I919ABWKPGoGN6hOCX_RVRRLhmLUhrhZDQ&s"
            }
            alt=""
          />
        </label>
        <input
          type="file"
          required
          hidden
          id="image"
          onChange={(e: any) => setimage(e.target.files[0])}
        />
        <p>product title</p>
        <input
          type="text"
          required
          name="title"
          value={data.title}
          onChange={onChangeHandler}
          placeholder="title"
        />
        <p>product description</p>

        <textarea
          placeholder="description"
          name="description"
          required
          rows={6}
          onChange={onChangeHandler}
          value={data.description}
        />
        <p>product category</p>
        <select name="category" required onChange={onChangeHandler}>
          <option value="موبایل">موبایل</option>
          <option value="ساعت هوشمند">ساعت هوشمند</option>
          <option value="اسپیکر">اسپیکر</option>
          <option value="کنسول بازی">کنسول بازی</option>
        </select>
        <p>product price</p>
        <input
          onChange={onChangeHandler}
          value={data.price}
          type="number"
          name="price"
          required
          placeholder="$20"
        />
        <button type="submit" className="text-white">
          ADD
        </button>
      </form>
    </div>
  );
};
export default Additem;

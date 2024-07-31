import { Rating } from "@mui/material";

export const CommentSection = () => {
  return (
    <div className="flex flex-col items-start  w-full gap-6">
      <h2>نقد و برسی ها</h2>
      <h3 className="text-sm text-gray-400">هنوز بررسی‌ای ثبت نشده است.</h3>
      <div className="flex flex-col gap-1">
        <span className="text-[14px] text-gray-400">امتیاز شما*</span>
        <Rating dir="ltr" name="simple-controlled" />
      </div>
      <form className="flex flex-col gap-4  items-start w-full">
        <textarea
          rows={5}
          placeholder="دیدگاه*"
          className="w-full  border p-2"
          name=""
          id=""
        ></textarea>
        <div className="w-full gap-4 flex">
          <input
            placeholder="نام*"
            type="text"
            className="border flex-1 p-2"
            name=""
            id=""
          />
          <input
            placeholder="ایمیل*"
            type="email"
            className="border flex-1 p-2"
            name=""
            id=""
          />
        </div>
        <button
          type="submit"
          className="p-[5px_25px] rounded-lg text-white bg-orange-400 items-start flex justify-staitems-start"
        >
          ثبت
        </button>
      </form>
    </div>
  );
};

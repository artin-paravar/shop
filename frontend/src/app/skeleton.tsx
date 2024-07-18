import { Skeleton } from "@mui/material";
export const SkeletonPage = ({ cards }: any) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className=" w-full flex items-center justify-between  sm:max-w-[320px] cursor-pointer rounded-lg flex-col object-contain"
      >
        <Skeleton
          sx={{ bgcolor: "grey.300" }}
          variant="rounded"
          className="w-full  sm:w-[320px] h-[300px_!important] sm:h-[430px_!important] "
        />
        <Skeleton className=" w-full max-w-[200px]  m-auto " />
        <Skeleton className=" max-w-[100px] w-full  m-auto " />
        <Skeleton
          className=" min-w-[140px] sm:max-w-[140px] p-[20px_0] w-full m-auto mt-2 "
          sx={{ bgcolor: "grey.300" }}
          variant="rectangular"
        />
      </div>
    ));
};

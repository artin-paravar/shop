import { Skeleton } from "@mui/material";
export const SkeletonPage = ({ cards }: any) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="mb-5 ml-3 w-full  flex items-center justify-between cursor-pointer rounded-lg flex-col object-contain"
      >
        <Skeleton
          sx={{ bgcolor: "grey.300" }}
          variant="rounded"
          className="w-full h-[340px_!important]  "
        />
        <Skeleton className=" w-full max-w-[200px]  m-auto " />
        <Skeleton className=" max-w-[100px] w-full  m-auto " />
      </div>
    ));
};

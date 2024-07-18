export const LoadingPage = () => {
  return (
    <div className="flex absolute top-0 left-0 bg-white w-full z-[999]  justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-28 h-28 bg-blue-500 rounded-full"></div>
        <div className="w-28 h-28 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-28 h-28 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
};

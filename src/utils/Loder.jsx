import React from "react";

const Loder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-[#2b2d42] rounded-full animate-[bounce_0.6s_infinite]"></div>
        <div className="w-4 h-4 bg-[#8D99AE] rounded-full animate-[bounce_0.6s_infinite] [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-[#BED6DF] rounded-full animate-[bounce_0.6s_infinite] [animation-delay:-0.3s]"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loder;

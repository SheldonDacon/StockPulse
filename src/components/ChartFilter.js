import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-orange-600 border-orange-700 text-gray-100"
          : "border-orange-300 text-orange-300"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;

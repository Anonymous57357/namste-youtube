import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        className="bg-gray-400 hover:bg-gray-600 text-white 
      rounded-md cursor-pointer px-3 py-1.5 m-2 font-sans scroll-m-2"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

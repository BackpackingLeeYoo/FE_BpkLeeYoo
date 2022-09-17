import React from "react";

const MenuBar = () => {
  return (
    <div className="w-full h-[55px] flex items-center z-10 px-[15px] shadow-2xl bg-white fixed bottom-0">
      <div className="flex items-center justify-around w-full max-w-375px">
        <p>MY</p>
        <p>이유</p>
        <p>리뷰</p>
      </div>
    </div>
  );
};

export default MenuBar;

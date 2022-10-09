import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 z-10 flex h-[50px] w-full items-center justify-center bg-[#182C4D] px-[15px] shadow-md backdrop-blur-md">
      <div className="w-full max-w-[375px]">
        <p className=" text-[20px] font-black text-[#fff]">백패킹의 이유</p>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tiger from "../images/bottom/tiger.png";
import Rabbit from "../images/bottom/rabbit.png";

const MenuBar = () => {
  const navigator = useNavigate();
  const path = useLocation().pathname;
  const isSignIn = path === "/signin";
  const isMap = path === "/map";
  const isCertification = path.slice(1, 14) === "certification";

  if (isSignIn || isMap || isCertification) return <></>;

  return (
    <div className="fixed bottom-0 z-10 flex h-55 w-full items-center justify-center border-t-1 border-solid border-[#AAAAAA] bg-[#182C4D] px-15 shadow-2xl">
      <div className="max-w-375px flex w-full max-w-375 items-center justify-around text-18 text-14 font-black text-[#999999]">
        <div className="flex cursor-pointer items-center text-white" onClick={() => navigator("/")}>
          <img src={Tiger} className="mr-10 h-30 w-30 rounded-full bg-white object-cover" alt="" />
          <p className="mt-4 cursor-pointer">스탬프</p>
        </div>

        <div className="flex cursor-pointer items-center text-white" onClick={() => navigator("/list")}>
          <img src={Rabbit} className="mr-10 h-30 w-30 rounded-full	 bg-white object-cover" alt="" />
          <p className="mt-4 cursor-pointer">이유</p>
        </div>

        {/* <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => SweetAlertHook(1000, "준비중입니다", "warning")}
        >
          <IconButton color="gray" review />
          <p className="mt-4 cursor-pointer">리뷰</p>
        </div> */}
      </div>
    </div>
  );
};

export default MenuBar;

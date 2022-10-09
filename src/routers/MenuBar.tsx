import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "../elements/IconButton";
import { SweetAlertHook } from "../utils/sweet";

const MenuBar = () => {
  const navigator = useNavigate();
  const path = useLocation().pathname;
  const isSignIn = path === "/signin";

  if (isSignIn) return <></>;

  return (
    <div className="fixed bottom-0 z-10 flex h-[55px] w-full items-center justify-center px-[15px] shadow-2xl">
      <div className="max-w-375px flex w-full max-w-[375px] items-center justify-around font-black text-[#999999]">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigator("/")}>
          <IconButton color="gray" my />
          <p className="mt-4 cursor-pointer">MY</p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => SweetAlertHook(1000, "준비중입니다", "warning")}
        >
          <IconButton color="gray" backpack />
          <p className="mt-4 cursor-pointer">이유</p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => SweetAlertHook(1000, "준비중입니다", "warning")}
        >
          <IconButton color="gray" review />
          <p className="mt-4 cursor-pointer">리뷰</p>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

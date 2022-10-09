import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SweetAlertHook } from "../utils/sweet";

const MenuBar = () => {
  const navigator = useNavigate();
  const path = useLocation().pathname;
  const isSignIn = path === "/signin";

  if (isSignIn) return <></>;

  return (
    <div className="fixed bottom-0 z-10 flex h-[55px] w-full items-center justify-center bg-[#BC1C1E] px-[15px] shadow-2xl">
      <div className="max-w-375px flex w-full max-w-[375px] items-center justify-around font-black text-[#fff]">
        <p className="cursor-pointer" onClick={() => navigator("/")}>
          MY
        </p>
        <p className="cursor-pointer" onClick={() => SweetAlertHook(1000, "오픈전입니다", "warning")}>
          이유
        </p>
        <p className="cursor-pointer" onClick={() => SweetAlertHook(1000, "오픈전입니다", "warning")}>
          리뷰
        </p>
      </div>
    </div>
  );
};

export default MenuBar;

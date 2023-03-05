import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "../elements/IconButton";

const Header = () => {
  const navigator = useNavigate();

  const path = useLocation().pathname;
  const isSignIn = path === "/signin";
  const isMap = path === "/map";
  const isCertification = path.slice(1, 14) === "certification";
  const isReason = path.slice(1, 7) === "reason";

  if (isSignIn || isMap) return <></>;

  if (isCertification || isReason)
    return (
      <>
        <div className="mx-auto w-full">
          <nav className="fixed top-0 z-10 flex h-50 w-full max-w-375 items-center justify-center border-b-1 border-solid border-[#AAAAAA] bg-white px-15">
            <div className="flex w-full items-center">
              <IconButton color="black" size="25" backIcon _onClick={() => navigator("/")} />
              <p className="ml-15 text-18 font-black text-[#35393D]">{isCertification ? "인증하기" : "나의이유"}</p>
            </div>
          </nav>
        </div>
      </>
    );

  return (
    <nav className="fixed top-0 z-10 flex h-[50px] w-full items-center justify-center bg-[#182C4D] px-[15px] shadow-md backdrop-blur-md">
      <div className="w-full max-w-[375px]">
        <p className=" text-[20px] font-black text-[#fff]">백패킹의 이유</p>
      </div>
    </nav>
  );
};

export default Header;

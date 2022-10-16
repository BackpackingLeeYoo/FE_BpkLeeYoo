import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  const isSignIn = path === "/signin";
  const isMap = path === "/map";
  const isCertification = path.slice(1, 14) === "certification";

  if (isSignIn || isMap || isCertification) return <></>;

  return (
    <nav className="fixed top-0 z-10 flex h-[50px] w-full items-center justify-center bg-[#182C4D] px-[15px] shadow-md backdrop-blur-md">
      <div className="w-full max-w-[375px]">
        <p className=" text-[20px] font-black text-[#fff]">백패킹의 이유</p>
      </div>
    </nav>
  );
};

export default Header;

import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kakaoLogin from "../images/kakaoLogin.png";
import { KAKAO_AUTH_URL } from "../utils/auth";
import isLogin from "../utils/isLogin";
import MainImg from "../images/sign/main.jpg";

const SignIn = () => {
  const navigate = useNavigate();

  const signInBtn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    console.log(isLogin);
    if (isLogin()) return navigate("/");
  }, [isLogin]);

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-end w-screen h-screen bg-center bg-cover bg-main-img">
        <div onClick={signInBtn} className="mb-[50px]">
          <p className="font-black text-center text-gray-900 text-30">백패킹의 이유</p>
          <img className="mt-[30px]" width={327} src={kakaoLogin} alt="kakaoLogin" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;

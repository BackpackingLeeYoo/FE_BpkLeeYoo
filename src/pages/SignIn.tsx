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
    if (isLogin()) return navigate("/");
  }, [isLogin()]);

  return (
    <Fragment>
      <div className="flex h-screen w-screen flex-col items-center justify-end bg-main-img bg-cover bg-center">
        <div onClick={signInBtn} className="fixed bottom-180">
          <img className="w-full max-w-200" src={kakaoLogin} alt="kakaoLogin" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;

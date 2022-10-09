import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kakaoLogin from "../images/kakaoLogin.png";
import { KAKAO_AUTH_URL } from "../utils/auth";
import isLogin from "../utils/isLogin";

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
      <div className="flex flex-col items-center justify-center mt-80 mb-100">
        <img className="h-253" src="http://www.outdoornews.co.kr/news/photo/202001/31551_88051_98.jpg" alt="logo" />
        <p className="text-gray-900 text-30">백패킹의 이유</p>
        <div onClick={signInBtn} className="mt-[200px]">
          <img width={327} src={kakaoLogin} alt="kakaoLogin" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;

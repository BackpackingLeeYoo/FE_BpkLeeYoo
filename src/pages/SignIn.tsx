import React, { Fragment } from "react";
import kakaoLogin from "../images/kakaoLogin.png";
import { KAKAO_AUTH_URL } from "../servers/auth";

const SignIn = () => {
  const signInBtn = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center mt-[80px] mb-[100px]">
        <img className="h-[253px]" src="http://www.outdoornews.co.kr/news/photo/202001/31551_88051_98.jpg" alt="logo" />
        <p className="text-[30px] text-gray-900">백패킹의 이유</p>
        <div onClick={signInBtn} className="mt-[200px]">
          <img width={327} src={kakaoLogin} alt="kakaoLogin" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;

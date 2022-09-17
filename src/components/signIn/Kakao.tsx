import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../servers/axios";
import { setCookie } from "../../servers/cookies";

// 카카오 로그인 인가코드
const Kakao = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    const getKakao = async (code: string) => {
      try {
        const { data } = await instance.get(`auth/kakao?code=${code}`);
        console.log(data);
        setCookie("accessToken", data.token, 100);
        const userInfo = {
          nickname: data.user.nickname,
          profileImg: data.user.profileImg,
          userId: data.user.userId,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        navigate("/");
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    if (code) {
      getKakao(code);
    }
  }, [code, navigate]);

  return <></>;
};

export default Kakao;

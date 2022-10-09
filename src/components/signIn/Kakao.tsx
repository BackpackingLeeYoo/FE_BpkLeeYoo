import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { user } from "../../recoil/user";
import { instance } from "../../utils/axios";
import { setCookie } from "../../utils/cookies";

// 카카오 로그인 인가코드
const Kakao = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const setUser = useSetRecoilState(user);

  useEffect(() => {
    const getKakao = async (code: string) => {
      try {
        const { data } = await instance.get(`auth/kakao?code=${code}`);
        console.log(data);
        const userInfo = {
          nickname: data.user.nickname,
          profileImg: data.user.profileImg,
          stamps: data.user.stamps,
        };
        setCookie("accessToken", data.token, 100);
        setUser(userInfo);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    if (code) {
      getKakao(code);
    }
  }, [code, navigate]);

  return <></>;
};

export default Kakao;

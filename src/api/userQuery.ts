import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { instance } from "../utils/axios";
import { getCookie } from "../utils/cookies";
import { SweetAlertHook } from "../utils/sweet";

export interface User {
  loginId?: string;
  social?: string;
  profileImage?: string;
  url?: string;
  nickname?: string;
  aboutMe?: string;
}

export interface IUser {
  data: User[];
}
const token = getCookie("accessToken");

//로그인 체크
export const useSignInCheck = () => {
  return useQuery<any, AxiosError>("signInCheck", () => {
    return instance.get("/auth/me");
  });
};

//내 스탬프 정보
export const useGetMyStamp = () => {
  return useQuery("getMyStamp", async () => {
    return await instance.get("/mypage");
  });
};

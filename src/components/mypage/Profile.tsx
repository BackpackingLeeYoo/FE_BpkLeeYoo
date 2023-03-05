import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../../recoil/user";

export interface IUserInfo {
  profileImg: string;
  nickname: string;
}

const Profile = (props: any) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(user);

  return (
    <>
      <div className="mx-auto mt-80 mb-42 flex w-full max-w-375 flex-col items-start rounded-[12px] bg-white p-20 drop-shadow-2xl">
        <div className="flex items-center">
          <img
            src={
              userInfo ? userInfo.profileImg : "https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
            }
            alt="profile-image"
            className="mr-20 h-60 w-60 rounded-full border-1 border-solid border-gray-600"
          />
          <div className="flex flex-col">
            <p className="mb-15 text-22">
              <span className="font-black">{userInfo ? userInfo.nickname : "백패커"} 님</span>의
            </p>
            <p className="text-14">
              <span className="text-[#27AE60] ">{props?.stampList?.data?.data?.isStampCount}가지</span> 이유가
              기록되었습니다.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/map");
          }}
          className="mt-[20px] ml-[80px] h-[30px] w-[102px] rounded border-1 border-solid border-[#AAAAAA] text-[12px] text-[#999999]"
        >
          현재 위치 확인
        </button>
      </div>
    </>
  );
};

export default Profile;

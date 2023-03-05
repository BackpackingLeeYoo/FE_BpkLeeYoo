import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../recoil/user";
import { instance } from "../utils/axios";
import { dateFormat } from "../utils/date";

interface IReason {
  stamp: {
    _id: string;
    stampName: string;
    stampImage: string;
    latitude: number;
    longitude: number;
    isStamp: boolean;
    createdAt: number;
    updatedAt: number;
    stampComment: string;
    userId: {
      _id: string;
      email: string;
      nickname: string;
      profileImg: string;
      createdAt: string;
      stamps: string[];
      __v: number;
      userId: string;
      id: string;
    };
    __v: number;
    stampId: string;
    id: string;
  };
}

const Reason = () => {
  const [userInfo, setUserInfo] = useRecoilState(user);
  const [reason, setReason] = useState<IReason>({
    stamp: {
      _id: "",
      stampName: "",
      stampImage: "",
      latitude: 0,
      longitude: 0,
      isStamp: false,
      createdAt: 0,
      updatedAt: 0,
      stampComment: "",
      userId: {
        _id: "",
        email: "",
        nickname: "",
        profileImg: "",
        createdAt: "",
        stamps: [],
        __v: 0,
        userId: "",
        id: "",
      },
      __v: 0,
      stampId: "",
      id: "",
    },
  });
  const changeDate = dateFormat(Number(reason?.stamp?.createdAt));

  const params = useParams();

  const getReason = async () => {
    try {
      const { data } = await instance.get(`/mypage/${params.stampId}`);
      setReason(data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReason();
  }, []);

  return (
    <div className="mx-auto mb-119 max-w-375">
      <div className="mt-75 mb-15 flex items-center px-15">
        <img
          src={
            reason.stamp.userId.profileImg
              ? reason.stamp.userId.profileImg
              : "https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
          }
          alt="profile-image"
          className="mr-20 h-50 w-50 rounded-full border-1 border-solid border-gray-600 object-contain"
        />
        <div className="flex flex-col">
          <p className="mb-15 text-16">{reason.stamp.userId.nickname}</p>
          <p className="text-12 text-[#999999]">{changeDate}</p>
        </div>
      </div>
      <div className="flex h-[375px] w-full flex-col items-center justify-center bg-[#F3F3F3]">
        <img
          className="h-full w-full object-cover"
          src={
            reason.stamp.stampImage
              ? reason.stamp.stampImage
              : "https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
          }
          alt=""
        />
      </div>

      <div className="w-full px-15 text-15">
        <p className="mt-18 font-black">
          {reason.stamp.userId.nickname ? reason.stamp.userId.nickname : "백패커"}
          <span className="font-norma text-12"> 님의 이유</span>
        </p>

        <div className="mt-10">{reason.stamp.stampComment}</div>
      </div>
    </div>
  );
};

export default Reason;

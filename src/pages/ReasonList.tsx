import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../recoil/user";
import { instance } from "../utils/axios";
import { dateFormat } from "../utils/date";

const Reason = () => {
  return (
    <div className="mx-auto mb-119 max-w-375">
      <div className="mt-75 mb-15 flex items-center px-15">
        <img
          src="https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
          alt="profile-image"
          className="mr-20 h-60 w-60 rounded-full border-1 border-solid border-gray-600"
        />
        <div className="flex flex-col">
          <p className="mb-15 text-16">닉네임</p>
          <p className="text-12 text-[#999999]">2022-03-03</p>
        </div>
      </div>
      <div className="flex h-[375px] w-full flex-col items-center justify-center bg-[#F3F3F3]">
        <img
          className="h-full w-full object-cover"
          src="https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
          alt=""
        />
      </div>

      <div className="w-full px-15 text-15">
        <p className="mt-18 font-black">
          백패커
          <span className="font-norma text-12"> 님의 이유</span>
        </p>

        <div className="mt-10">이유 남긴 곳</div>
      </div>
    </div>
  );
};

export default Reason;

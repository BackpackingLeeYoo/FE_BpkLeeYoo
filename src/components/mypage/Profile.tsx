import React from "react";

const Profile = () => {
  return (
    <>
      <div className="mt-[80px] flex flex-col items-start mx-auto max-w-[345px] w-full mb-[42px] p-[20px] rounded-[12px] bg-white drop-shadow-2xl">
        <div className="flex items-center">
          <img
            src="https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
            alt="profile-image"
            className="w-[60px] h-[60px] border-solid border-1 border-gray-600 rounded-full mr-[20px]"
          />
          <div className="flex flex-col">
            <p className="text-[22px] mb-[5px]">
              <span className="font-black">유방구 님</span>의
            </p>
            <p className="text-[14px]">
              <span className="text-[#27AE60] ">2가지</span> 이유가 기록되었습니다.
            </p>
          </div>
        </div>
        <button className="mt-[20px] ml-[80px] w-[102px] h-[30px] border-solid border-1 border-[#AAAAAA] text-[12px] rounded text-[#999999]">
          현재 위치 확인
        </button>
      </div>
    </>
  );
};

export default Profile;

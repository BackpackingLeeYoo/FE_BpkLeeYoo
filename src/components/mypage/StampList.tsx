import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyStamp } from "../../api/userQuery";
import useCoords from "../../utils/useCoords";
import { SweetAlertHook } from "../../utils/sweet";
import Spinner from "../Spinner";
import isLogin from "../../utils/isLogin";
import Weather from "../Weather";

interface IStampList {
  stampImage: string;
  stampName: string;
  isStamp: boolean;
  latitude: string;
  longitude: string;
  stampId: number;
}

const StampList = (props: any) => {
  const navigate = useNavigate();
  const defaultImg = "https://i.postimg.cc/T37KDFj7/Kakao-Talk-20221209-212015184.png";
  const stampList = props.stampList.data?.data?.stamps;
  const stampCount = props.stampList.data?.data?.isStampCount;
  const { latitude, longitude, error } = useCoords();

  const checkSameArea = (stamp: any) => {
    if (latitude && longitude) {
      const newDistance = getDistance(stamp.latitude, stamp.longitude, latitude, longitude);
      console.log(newDistance);

      if (isLogin() && newDistance <= 2000) {
        SweetAlertHook(2000, `${stamp.stampName} 도착을 축하드립니다`, "success");
        return navigate(`/certification/${stamp.stampId}?${stamp.stampName}`);
      }
    }

    if (!isLogin()) {
      SweetAlertHook(1000, `로그인 후 이용해주세요`, "warning");
      return navigate(`/signin`);
    }
    return SweetAlertHook(1500, "해당 위치가 아닙니다", "error");
  };

  //두지점의 거리 구하기
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    if (lat1 == lat2 && lon1 == lon2) return 0;
    const radLat1 = (Math.PI * lat1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radTheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1) dist = 1;

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;
    return dist;
  };

  const handleImgError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.src = defaultImg;
  };

  const getReason = (stamp: any) => {
    // SweetAlertHook(2000, `인증이 완료된 스탬프입니다.`, "success");
    navigate(`/reason/${stamp.stampId}`);
  };

  if (props?.stampList?.isLoading)
    return (
      <div className="mx-auto mt-100 flex justify-center">
        <Spinner />
      </div>
    );

  // if (error) return <>{SweetAlertHook(2000, `${error?.message}`, "error")}</>;

  return (
    <div className="mx-auto mb-50 max-w-375">
      <Weather />
      <div className="mb-[30px] flex items-center justify-between ">
        <p>📍 나의 기록</p>
        <p>
          {stampCount}/{stampList?.length}
        </p>
      </div>

      <div className="flex w-full flex-wrap">
        {stampList?.map((stamp: IStampList, idx: number) => {
          return (
            <Fragment key={idx}>
              <div className="mb-15 flex basis-1/3 flex-col items-center">
                {stamp?.isStamp ? (
                  <img
                    onClick={() => getReason(stamp)}
                    src={stamp.stampImage}
                    onError={handleImgError}
                    className="mb-10 h-100 w-100 cursor-pointer rounded-full font-medium"
                  />
                ) : (
                  <div
                    onClick={() => checkSameArea(stamp)}
                    className="mb-10 flex h-100 w-100	cursor-pointer items-center justify-center rounded-full bg-[#182C4D] font-medium opacity-60"
                  >
                    <img
                      src={stamp.stampImage}
                      onError={handleImgError}
                      className="h-100 w-100 rounded-full border-2 border-solid border-white font-medium"
                    />
                    <p className="text-gray absolute text-20 font-black">인증전</p>
                  </div>
                )}
                <p className="text-13">{stamp.stampName}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StampList;

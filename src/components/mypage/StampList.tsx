import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyStamp } from "../../api/userQuery";
import useCoords from "../../utils/useCoords";
import { SweetAlertHook } from "../../utils/sweet";

interface IStampList {
  stampImage: string;
  stampName: string;
  isStamp: boolean;
  latitude: string;
  longitude: string;
  stampId: number;
}

const StampList = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isFetching }: any = useGetMyStamp();
  console.log("data", data, "isLoading", isLoading, "error", error, "isFetching", isFetching);

  const stampList = data?.data?.stamps;
  const stampCount = data?.data?.isStampCount;

  const { latitude, longitude } = useCoords();
  const checkSameArea = (stamp: any) => {
    console.log(stamp);
    const newDistance = getDistance(stamp.latitude, stamp.longitude, latitude, longitude);
    console.log(latitude, longitude);
    if (newDistance <= 2000) {
      SweetAlertHook(2000, `${stamp.stampName} 도착을 축하드립니다`, "success");
      return navigate(`/certification/${stamp.stampId}`);
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
    console.log(dist);
    return dist;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <>
        An error has occurred:<span className="text-[red]"> {error?.message}</span>{" "}
      </>
    );

  return (
    <div className="w-full mx-auto max-w-375 mb-50">
      <div className="mb-[30px] flex items-center justify-between">
        <p>나의 기록</p>
        <p>
          {stampCount}/{stampList?.length}
        </p>
      </div>

      <div className="flex">
        {stampList?.map((stamp: IStampList, idx: number) => {
          return (
            <Fragment key={idx}>
              <div onClick={() => checkSameArea(stamp)} className="flex flex-col items-center mb-15 basis-1/3">
                {stamp.isStamp ? (
                  <img src={stamp.stampImage} className="mb-10 font-medium rounded-full h-100 w-100" />
                ) : (
                  <div className="mb-10 flex h-100 w-100 items-center	justify-center rounded-full bg-[#182C4D] font-medium opacity-60">
                    <p className="font-black text-white text-20">인증전</p>
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

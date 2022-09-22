import React, { Fragment, useEffect, useState } from "react";
import useCoords from "../../hook/useCoords";

const StampList = () => {
  const stampList = [
    {
      area: "대이작도",
      latitude: 37.4931456,
      longitude: 126.9202944,
    },
    {
      area: "기장",
      latitude: 100,
      longitude: 333,
    },
  ];
  const [active, setActive] = useState(false);
  const { latitude, longitude } = useCoords();

  const checkSameArea = (stamp: any) => {
    if (stamp.latitude === latitude && stamp.longitude === longitude) {
      return alert("목적지에 도착하셨군요! 인증하세요!");
    }
    return alert("해당위치가 아닙니다.");
  };

  return (
    <div className="max-w-[375px] w-full mx-auto mb-[50px]">
      <div className="flex items-center justify-between mb-[30px]">
        <p>나의 기록</p>
        <p>0/{stampList.length}</p>
      </div>

      <div className="flex flex-wrap justify-between w-full">
        {stampList.map((stamp, idx) => {
          return (
            <Fragment key={idx}>
              <div onClick={() => checkSameArea(stamp)} className="flex flex-col items-center mb-[15px]">
                {active ? (
                  <p className="w-[100px] h-[100px] bg-[#6FCF97] rounded-full mb-[10px] font-medium" />
                ) : (
                  <p className="w-[100px] h-[100px] bg-[gray] rounded-full mb-[10px] font-medium" />
                )}

                <p className="text-[13px]">{stamp.area}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StampList;

import React, { Fragment } from "react";

const StampList = () => {
  const stampList = [
    "개도",
    "굴업도",
    "대이작도",
    "덕적도",
    "도롱이여못",
    "매물도",
    "무의도",
    "민둥산",
    "박달고치",
    "선자령",
    "영남알프스",
    "울릉도",
    "우도",
    "천사섬",
    "샤랑도",
  ];

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
              <div className="flex flex-col items-center mb-[15px]">
                <p className="w-[100px] h-[100px] bg-[#6FCF97] rounded-full mb-[10px] font-medium"></p>
                <p className="text-[13px]">{stamp}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StampList;

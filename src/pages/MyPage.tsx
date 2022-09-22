import React, { Fragment } from "react";
import StampList from "../components/mypage/StampList";
import Profile from "../components/mypage/Profile";
import useCoords from "../hook/useCoords";

const MyPage = () => {
  const { latitude, longitude } = useCoords();

  return (
    <Fragment>
      <div className="p-[20px]">
        <Profile />
        <StampList />
      </div>
    </Fragment>
  );
};

export default MyPage;

import React, { Fragment } from "react";
import StampList from "../components/mypage/StampList";
import Profile from "../components/mypage/Profile";

const MyPage = () => {
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

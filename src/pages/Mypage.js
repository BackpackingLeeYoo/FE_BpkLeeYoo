import React, { Fragment } from "react";
import MyProfile from "../components/mypage/MyProfile";
import MyStamp from "../components/mypage/MyStamp";
import MyLocation from "../components/mypage/MyLocation";

const Mypage = () => {
  return (
    <Fragment>
      <MyProfile />
      <MyLocation />
      <MyStamp />
    </Fragment>
  );
};

export default Mypage;

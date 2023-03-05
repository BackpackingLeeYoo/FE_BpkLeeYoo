import { Fragment, useEffect } from "react";
import StampList from "../components/mypage/StampList";
import Profile from "../components/mypage/Profile";
import { useGetMyStamp } from "../api/userQuery";
import isLogin from "../utils/isLogin";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const stampList = useGetMyStamp();
  const navigator = useNavigate();

  if (!isLogin()) {
    navigator("/sginin");
  }

  return (
    <Fragment>
      <div className="p-[20px]">
        <Profile stampList={stampList} />
        <StampList stampList={stampList} />
      </div>
    </Fragment>
  );
};

export default MyPage;

import { Fragment, useEffect, useState } from "react";
import StampList from "../components/mypage/StampList";
import Profile from "../components/mypage/Profile";
import { useGetMyStamp } from "../api/userQuery";
import isLogin from "../utils/isLogin";
import { useNavigate } from "react-router-dom";
import { UseQueryResult } from "react-query";

const MyPage = () => {
  const navigator = useNavigate();
  const [stampList, setStampList] = useState<UseQueryResult>();

  const getMyStamp = () => {
    const data = useGetMyStamp();
    setStampList(data);
  };

  getMyStamp();

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

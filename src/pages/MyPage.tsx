import { Fragment, useEffect } from "react";
import StampList from "../components/mypage/StampList";
import Profile from "../components/mypage/Profile";
import { useGetMyStamp } from "../api/userQuery";

const MyPage = () => {
  const stampList = useGetMyStamp();

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

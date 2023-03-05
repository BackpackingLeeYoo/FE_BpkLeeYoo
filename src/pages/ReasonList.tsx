import { Fragment } from "react";
import defaultImg from "../images/common/defaultProfile.png";

const ReasonList = () => {
  const ReasonList = [
    {
      id: 1,
      profileImg: "https://picsum.photos/id/1005/100",
      postImg: "https://picsum.photos/id/1005/500",
      nickname: "John Doe",
      comment: "또 다른 세상을 만납니다.",
    },
    {
      id: 2,
      profileImg: "https://picsum.photos/id/1012/100",
      postImg: "https://picsum.photos/id/1012/500",
      nickname: "Jane Doe",
      comment: "나만의 작은 세상",
    },
    {
      id: 3,
      profileImg: "https://picsum.photos/id/1015/100",
      postImg: "https://picsum.photos/id/1015/500",
      nickname: "Tom Hanks",
      comment: "미지의 세계로 떠나는 여행",
    },
    {
      id: 4,
      profileImg: "https://picsum.photos/id/1018/100",
      postImg: "https://picsum.photos/id/1018/500",
      nickname: "Sara Johnson",
      comment: "새로운 시작, 새로운 나",
    },
    {
      id: 5,
      profileImg: "https://picsum.photos/id/1020/100",
      postImg: "https://picsum.photos/id/1020/500",
      nickname: "Michael Kim",
      comment: "나만의 세상을 만들어 갑니다.",
    },
  ];

  return (
    <div className="mx-auto mb-119">
      {ReasonList.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="mx-auto mt-75 mb-15 flex w-full max-w-375 items-center px-15">
              <img
                src={item.profileImg}
                alt="profile-image"
                className="mr-20 h-50 w-50 rounded-full border-1 border-solid border-gray-600 object-contain"
              />
              <div className="flex flex-col">
                <p className="mb-15 text-16">{item.nickname}</p>
                <p className="text-12 text-[#999999]">2022-03-03</p>
              </div>
            </div>
            <div className="flex h-[375px] w-full flex-col items-center justify-center border-y-1 border-solid border-[#E5E5E5] bg-[#F3F3F3]">
              <img className="h-full w-full object-contain" src={item.postImg} alt="" />
            </div>

            <div className="mx-auto w-full w-full max-w-375 px-15 text-15">
              <p className="mt-18 font-black">
                {item.nickname}
                <span className="font-norma text-12"> 님의 이유</span>
              </p>

              <div className="mt-10">{item.comment}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ReasonList;

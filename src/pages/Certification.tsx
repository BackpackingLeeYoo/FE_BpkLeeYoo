import React, { useState, SyntheticEvent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconButton from "../elements/IconButton";
import { instanceForm } from "../utils/axios";
import { SweetAlertHook } from "../utils/sweet";

const Certification = () => {
  const [reasonText, setReasonText] = useState("");
  const [reasonImg, setReasonImg] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const params = useParams();
  const location = useLocation();
  const navigator = useNavigate();

  const stampLocation = location?.search?.replace("?", "");

  const setUploadImage = (event: any) => {
    const uploadImage = event.target.files;

    setImageSrc(URL.createObjectURL(uploadImage[0]));
    setReasonImg(uploadImage[0]);
  };

  const setUploadText = (event: any) => {
    setReasonText(event.target.value);
  };

  const postReason = async () => {
    try {
      const formData = new FormData();
      formData.append("stampImage", reasonImg);
      formData.append("stampComment", reasonText);
      formData.append("weatherTemp", "온도");
      formData.append("weatherIcon", "날씨");
      const { data } = await instanceForm.put(`/mypage/${params.stampId}`, formData);
      navigator(`/reason/${params.stampId}`);
    } catch (error: unknown) {
      console.log(error);
      const { message } = error as Error;
      SweetAlertHook(2000, message, "error");
    }
  };

  return (
    <>
      <div className="mx-auto mb-119 max-w-375">
        <div className="mt-75 mb-35 px-15">
          <p className="font-black text-18">
            🚩 <span className="text-[#27AE60]">{stampLocation} </span>
            도착완료!
          </p>
        </div>
        <label htmlFor="success_image">
          <div className="flex h-[375px] w-full flex-col items-center justify-center bg-[#F3F3F3]">
            {imageSrc === "" ? (
              <>
                <IconButton color="gray" size="80" camera />
                <p className="mt-18 text-14 font-black text-[#aaaaaa]">사진을 첨부해 주세요.</p>
              </>
            ) : (
              <img className="object-contain w-full h-full" src={imageSrc} alt="" />
            )}
          </div>
          <input
            onChange={setUploadImage}
            accept=".jpg, .jpeg, .png, .gif, .svg, .bmp, .webp, .heic, .heif, .jfif"
            type="file"
            id="success_image"
            className="hidden"
          ></input>
        </label>

        <p className="mx-auto mb-12 mt-27 w-[335px] text-15 font-black">💭 내가 생각하는 백패킹의 이유</p>

        <div className="mx-auto flex h-[160px] w-[335px] flex-col items-center justify-center rounded-xl bg-[#F3F3F3] p-20">
          <textarea
            onChange={setUploadText}
            className="w-full h-full font-black bg-transparent outline-none resize-none text-14"
            placeholder="예) 선자령에 가면 구름과 맞닿을 수 있다"
          ></textarea>
        </div>

        <button
          onClick={postReason}
          className="mx-auto mt-20 block w-[335px] rounded-xl border-solid border-[#E5E5E5] bg-white py-14 text-[#999999]"
        >
          등록하기
        </button>
      </div>
    </>
  );
};

export default Certification;

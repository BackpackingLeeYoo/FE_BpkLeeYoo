import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// URL이 정상적인 경로가 아닐경우 나오는 페이지
const NotFound = () => {
  const navigation = useNavigate();
  return (
    <>
      <Helmet>
        <title>백패킹의 이유 | NotFound</title>
      </Helmet>
      <div className="fixed z-[9999] flex h-screen w-full flex-col items-center justify-center space-y-10 bg-[#ffffff]">
        <img
          width={325}
          height={319}
          src="https://i.postimg.cc/fRt5LJPk/Kakao-Talk-20221209-212017835.png"
          alt="notFound"
        />
        <span className="text-3xl font-black text-red-600">잘못된 접근 지역!</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigation("/")}
          className="text-md h-[40px] w-[130px] rounded-md bg-[#27AE60] font-semibold text-white"
        >
          돌아가기
        </motion.button>
      </div>
    </>
  );
};
export default NotFound;

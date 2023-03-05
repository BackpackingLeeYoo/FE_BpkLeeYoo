import { getCookie } from "./cookies";

const isLogin = () => {
  return getCookie("accessToken") && localStorage.getItem("recoil-persist");
};
export default isLogin;

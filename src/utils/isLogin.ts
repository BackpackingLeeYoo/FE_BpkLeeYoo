import { getCookie } from "./cookies";

const isLogin = () => !!getCookie("accessToken");
export default isLogin;

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

/* user정보 저장 */
export const MyProfile = atom({
  key: "myStamp",
  default: {
    stampImage: "",
    nickname: "",
    userId: "",
  },
});

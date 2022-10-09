import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

/* user정보 저장 */
export const user = atom({
  key: "myProfile",
  default: {
    stampImage: "",
    nickname: "",
    userId: "",
  },
  effects_UNSTABLE: [persistAtom],
});

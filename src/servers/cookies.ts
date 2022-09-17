import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, expires: number) => {
  return cookies.set(name, value, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 15),
    secure: true,
    sameSite: "none",
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

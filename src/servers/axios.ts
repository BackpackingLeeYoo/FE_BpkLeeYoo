import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "./cookies";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie("accessToken");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});

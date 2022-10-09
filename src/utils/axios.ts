import axios, { AxiosRequestConfig } from "axios";

import { getCookie } from "./cookies";

const axiosJsonConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
};

const axiosFormDataConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "multipart/form-data",
    accept: "application/json,",
  },
};

export const instance = axios.create(axiosJsonConfig);
export const instanceForm = axios.create(axiosFormDataConfig);

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie("accessToken");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});

instanceForm.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie("accessToken");
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});

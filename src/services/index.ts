import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const instance = axios.create({
  timeout: 20000,
});

instance.interceptors.request.use(
  config => {
    typeof config.withCredentials === undefined && (config.withCredentials = true);
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    const {
      status,
      data,
      data: { code },
    } = response;
    if (status !== 200) {
      throw new Error("接口调用失败~");
    }
    if (code && code === 1024) {
      return;
    }
    return data;
  },
  error => Promise.reject(error)
);

const request = (config: AxiosRequestConfig) => {
  return instance.request(config);
};

export default request;

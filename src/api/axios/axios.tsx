import axios, { type AxiosInstance } from "axios";

const axiosJson = axios.create({
  baseURL: "http://localhost:5000",
});

const axiosForm = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 20000,
  headers: {
    "Content-Type": "multipart/formdata",
  },
});

const addAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("user-store")!)?.state
        ?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token ? token : "NoToken"}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

addAuthInterceptor(axiosJson);
addAuthInterceptor(axiosForm);

export { axiosJson, axiosForm };

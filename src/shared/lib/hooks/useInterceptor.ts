"use client";
import axios from "axios";

const data =
  typeof window !== "undefined" ? localStorage.getItem("userData") : "{}";

const parsedData = JSON.parse(data || "{}");

console.log(parsedData.id);

// Создание экземпляра Axios с предустановленными конфигурациями
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "https://meet-my-box-production.up.railway.app/",
});

// Добавление интерсептора для вставки JWT в заголовки каждого запроса
axiosInstance.interceptors.request.use(
  (config) => {
    // Получение токена из локального хранилища
    const token = parsedData.access;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Добавление интерсептора ответа для обработки истечения токена
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = parsedData.refresh;

      if (refreshToken) {
        try {
          const res = await axios.post(
            `${axiosInstance.defaults.baseURL}/api/access`,
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.access);
            localStorage.setItem("refreshToken", res.data.refresh);
            axiosInstance.defaults.headers.common["Authorization"] =
              `Bearer ${res.data.access}`;
            originalRequest.headers["Authorization"] =
              `Bearer ${res.data.access}`;
            return axiosInstance(originalRequest);
          }
        } catch (refreshError) {
          console.error("Unable to refresh token:", refreshError);
          // Очистить токены и обработать ошибку
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return Promise.reject(refreshError);
        }
      } else {
        console.error("No refresh token available");
        // Очистить токены и обработать ошибку
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

import axios from "axios";

const customAxios = axios.create({
  // baseURL: "https://thailottery.onrender.com/api",
  baseURL: "https://thailottery.cloud",
});

const requestHandler = (request) => {
  const token = localStorage.getItem("token");  
  if (token) {
    request.headers.Authorization  = 'Bearer '+token;
  }
  return request;
};

const responseHandler = (response) => response;

const errorHandler = (error) => {
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  requestHandler,
  errorHandler
);

customAxios.interceptors.response.use(
  responseHandler,
  errorHandler
);

export default customAxios;

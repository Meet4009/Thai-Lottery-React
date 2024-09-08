import axios from "axios";
// import store from "../state/store";
// import { useStore } from 'vuex'
const customAxios = axios.create({
  baseURL: "https://thailottery.onrender.com/api",
  // baseURL: "http://etriqapi.thinkncode.com"
});
const requestHandler = (request) => {
  let token = localStorage.getItem("token");
  request.headers.Cookie = "token=" + JSON.parse(token);
  return request;
};
const responseHandler = (response) => {
  // if (response.status == 401) {
  //   store.dispatch("auth/logout");
  // }
  return response;
};

const errorHandler = (error) => {
  // if (error.response && error.response.status == 401) {
  //   store.dispatch("auth/logout");
  // }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;

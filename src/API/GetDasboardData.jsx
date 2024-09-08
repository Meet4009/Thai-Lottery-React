import axios from "axios";

const thaiLotteryData = axios.create({
  baseURL: "https://thailottery.onrender.com/api/admin",
  // baseURL: "http://localhost:8002/api/admin",
});

export const getData = () => {
  return thaiLotteryData.get("/dashboard");
};

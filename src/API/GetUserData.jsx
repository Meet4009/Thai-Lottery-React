import axios from "axios";

const thaiLotteryData = axios.create({
  baseURL: "https://thailottery.onrender.com",
  // baseURL: "http://localhost:8002",
});

export const getUserData = () => {
  return thaiLotteryData.get("/api/admin/users");
};

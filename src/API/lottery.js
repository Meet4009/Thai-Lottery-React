import axios from "../plugins/axios";

export const allWinner = async () => {
  return await axios.get("/admin/lottery/all-winner");
};

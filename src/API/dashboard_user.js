import axios from "../plugins/axios";
export const dashboard = async () => {
  return await axios.get("/admin/dashboard");
};

import axios from "../plugins/axios";

export const loginAuth = async (payload) => {
  return await axios.post("admin/login", payload);
};

export const logout = async (payload) => {
  return await axios.get("user/logout");
};

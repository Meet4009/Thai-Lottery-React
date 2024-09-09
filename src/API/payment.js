import axios from "../plugins/axios";

export const getPendingDeposite = async () => {
  return await axios.get("/admin/payment/pending/deposits");
};

export const getApprovedDeposite = async () => {
  return await axios.get("/admin/payment/approved/deposits");
};

export const getRejectedDeposite = async () => {
  return await axios.get("/admin/payment/rejected/deposits");
};

export const getAllDeposite = async () => {
  return await axios.get("/admin/payment/deposits");
};

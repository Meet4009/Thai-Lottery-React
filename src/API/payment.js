import axios from "../plugins/axios";

// Deposites all API
export const getPendingDeposite = async () => {
  return await axios.get("/admin/payment/pending/deposits");
};

export const setApproveDeposite = async (id) => {
  return await axios.get(`/admin/payment/deposit/approve/${id}`);
};

export const setRejecteDeposite = async (id) => {
  return await axios.get(`/admin/payment/deposit/reject/${id}`);
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

// Withdrawals all API

export const getPendingWithdrawals = async () => {
  return await axios.get("/admin/payment/pending/withdrawals");
};

export const setApproveWithdraw = async (id) => {
  return await axios.get(`/admin/payment/withdraw/approve/${id}`);
};

export const setRejecteWithdraw = async (id) => {
  return await axios.get(`/admin/payment/withdraw/reject/${id}`);
};

export const getApprovedWithdrawals = async () => {
  return await axios.get("/admin/payment/approved/withdrawals");
};

export const getRejectedWithdrawals = async () => {
  return await axios.get("/admin/payment/rejected/withdrawals");
};

export const getAllWithdrawals = async () => {
  return await axios.get("/admin/payment/withdrawals");
};

// Loser
export const setLoser = async (id) => {
  return await axios.get(`/admin/lottery/loss-buyer/${id}`);
};

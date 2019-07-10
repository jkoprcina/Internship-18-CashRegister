import axios from "axios";

export const getAllReceipts = async () => {
  return axios.get("api/receipts/all").then(response => response.data);
};

export const addReceipt = async product => {
  return axios.post("api/receipts/add", product);
};

export const getReceiptById = async id => {
  return axios.get("api/receipts/get-by-id", id).then(response => response.data);
};

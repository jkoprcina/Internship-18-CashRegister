import axios from "axios";

export const getTenReceipts = whereToStartFrom =>
  axios
    .get("api/receipts/get-ten", { params: { whereToStartFrom } })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Failed");
    });

export const getCashRegisterById = id =>
  axios
    .get("api/cash-registers/get-by-id", { params: { id } })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Something went wrong getting cash register");
    });

export const getCashierById = id =>
  axios
    .get("api/cashiers/get-by-id", { params: { id } })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Something went wrong getting cashier");
    });

export const getProductReceiptsById = id =>
  axios
    .get("api/product-receipts/get-by-receiptId", { params: { id } })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Something went wrong getting product-receipts");
    });

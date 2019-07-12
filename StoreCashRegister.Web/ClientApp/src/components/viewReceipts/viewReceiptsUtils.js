import axios from "axios";

export const getAllReceipts = () =>
  axios
    .get("api/receipts/all")
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Failed");
    });

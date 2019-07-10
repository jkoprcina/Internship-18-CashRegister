import axios from "axios";

export const getCashRegisterById = async id => {
  return axios.get("/api/cashier/get-by-id", id)
    .then(response => response.data);
};

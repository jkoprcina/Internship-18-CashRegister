import axios from "axios";

export const getCashierByUsername = async (username, password) => {
  return axios.get("/api/cashier/get-by-username", { username: username, password: password })
  .then(response => response.data);
};

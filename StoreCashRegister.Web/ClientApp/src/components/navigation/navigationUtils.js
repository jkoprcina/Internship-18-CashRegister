import axios from "axios";

export const validateAndGetCashRegister = cashRegisterId =>
  axios
    .get("api/cash-registers/get-by-id", { params: { id: cashRegisterId } })
    .then(cashierResponse => {
      return cashierResponse.data;
    })
    .catch(() => {
      alert("The CashRegister does not exist");
    });

export const validateAndGetCashier = (username, password) =>
  axios
    .get("api/cashiers/get-by-username", {
      params: {
        username,
        password
      }
    })
    .then(cashierResponse => {
      return cashierResponse.data;
    })
    .catch(() => {
      alert("The username or password are incorrect");
    });

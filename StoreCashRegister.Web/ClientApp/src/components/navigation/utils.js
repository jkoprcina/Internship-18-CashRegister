import axios from "axios";

export const getInfoAndSetLocalStorage = (
  cashRegisterId,
  cashierUsername,
  cashierPassword
) =>
  axios
    .get("api/cash-registers/get-by-id", { params: { id: cashRegisterId } })
    .then(cashRegisterResponse => {
      axios
        .get("api/cashiers/get-by-username", {
          params: {
            username: cashierUsername
          }
        })
        .then(cashierResponse => {
          localStorage.setItem("cashRegisterId", cashRegisterResponse.data.id);
          localStorage.setItem("cashierId", cashierResponse.data.id);
          localStorage.setItem("firstName", cashierResponse.data.firstName);
          localStorage.setItem("lastName", cashierResponse.data.lastName);
          alert("Welcome!");
        })
        .catch(() => {
          alert("The username or password are incorrect");
        });
    })
    .catch(() => {
      alert("The CashRegister does not exist");
    });

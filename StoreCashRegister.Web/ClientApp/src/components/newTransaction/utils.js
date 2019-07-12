import axios from "axios";

export const addReceipt = (
  fullPriceNoTax,
  fullPriceWithTax,
  fullLowerTaxPrice,
  fullHigherTaxPrice,
  cashRegisterId,
  cashierId
) => {
  axios
    .post("api/receipts/add", {
      params: {
        fullPriceNoTax,
        fullPriceWithTax,
        fullLowerTaxPrice,
        fullHigherTaxPrice,
        cashRegisterId,
        cashierId
      }
    })
    .then(() => {
      alert("Worked");
      return true;
    })
    .catch(() => {
      alert("Something went wrong");
    });
};

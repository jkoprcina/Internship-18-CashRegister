import axios from "axios";

export const addReceipt = (
  fullPriceNoTax,
  fullPriceWithTax,
  fullLowerTaxPrice,
  fullHigherTaxPrice,
  cashRegisterId,
  cashierId
) =>
  axios
    .post("api/receipts/add", {
      fullPriceNoTax,
      fullPriceWithTax,
      fullLowerTaxPrice,
      fullHigherTaxPrice,
      cashRegisterId,
      cashierId
    })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Something went wrong with receipt");
    });

export const addProductReceipts = (productReceipts, receiptId) =>
  productReceipts.map(productReceipt => {
    axios
      .post("api/product-receipts/add", {
        name: productReceipt.name,
        amount: productReceipt.amount,
        priceAtTheTime: productReceipt.price,
        tax: productReceipt.tax,
        productId: productReceipt.productId,
        receiptId
      })
      .catch(() => {
        alert("Something went wrong with productReceipts");
        return false;
      });
  });

export const removeAmount = (product, amount) =>
  axios.post("api/products/remove-amount", {
    id: product.id,
    amountToRemove: amount
  });

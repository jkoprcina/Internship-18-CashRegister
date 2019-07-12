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
    .catch(() => {
      alert("Something went wrong with receipt");
    });

export const addProductReceipts = (productReceipts, receiptId) =>
  productReceipts.map(productReceipt =>
    axios.post("api/product-receipts/add", {
      productId: productReceipt.productId,
      receiptId,
      name: productReceipt.name,
      amount: productReceipt.amount,
      tax: productReceipt.tax,
      price: productReceipt.price
    })
  );

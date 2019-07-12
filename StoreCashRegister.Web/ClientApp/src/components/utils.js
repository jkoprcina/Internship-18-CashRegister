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

export const getAllProducts = () =>
  axios
    .get("api/products/all")
    .then(response => {
      return response.data;
    })
    .catch(() => {
      alert("Failed");
    });

export const addProduct = (name, price, amountAvailable, tax, barcode) =>
  axios
    .post("/api/products/add", {
      barcode,
      name,
      price,
      amountAvailable,
      tax
    })
    .catch(() => {
      alert("Add unsucessful");
      return;
    })
    .then(() => {
      alert("Successfully added product");
    });
export const addAmount = (id, amount) =>
  axios.post("api/products/add-amount", { id, amountToAdd: amount });

export const editProduct = (id, barcode, price, tax) =>
  axios.post("api/products/edit", { id, barcode, price, tax });

import axios from "axios";

export const getAllProducts = async () => {
  return axios.get("api/products/all").then(response => response.data);
};

export const addProduct = async product => {
  return axios.post("api/products/add", product);
};

export const getProductById = async id => {
  return axios.get("api/products/get-by-id", id).then(response => response.data);
};

export const editProduct = async productToEdit => {
  return axios.post("api/products/edit", productToEdit);
};

export const increaseProductAmount = async (id, amount) => {
  return getProductById(id).then(product => {
    product.availableAmount += amount;
    editProduct(product);
  })
};

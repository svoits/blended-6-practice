import { instance } from "../services/api";

export async function getAllProducts() {
  const response = await instance.get("/products");
  return response.data.products;
}

export async function getProductById(id) {
  const response = await instance.get(`/products/${id}`);
  return response.data;
}

export async function addNewProduct(data) {
  const response = await instance.post("/products/add", data);
  return response.data;
}
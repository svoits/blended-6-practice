import { instance } from "../services/api";

export async function getAllProducts() {
  const response = await instance.get("/products");
  return response.data.products;
}

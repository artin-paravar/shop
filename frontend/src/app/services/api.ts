import axios from "axios";

const client = axios.create({
  baseURL: `https://shop-six-steel.vercel.app`,
});
export async function getProducts() {
  const { data } = await client("/api/shopitem/list");
  return data;
}
export async function getProduct(id: number) {
  const { data } = await client(`/api/shopitem/${id}`);
  return data;
}

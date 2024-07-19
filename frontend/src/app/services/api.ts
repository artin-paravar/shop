import axios from "axios";
// https://shop-dz8e.onrender.com
const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const { data } = await client("/api/shopitem/list");
  return data;
}

export async function getProduct(id: number) {
  const { data } = await client(`/api/shopitem/${id}`);
  return data;
}
//react query
export const Productsload = async ({ pageParam }: { pageParam: number }) => {
  const { data } = await client<any>(
    `/api/shopitem/list?_page=${pageParam}&_limit=4`
  );
  return data;
};

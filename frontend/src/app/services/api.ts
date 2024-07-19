import axios from "axios";

const client = axios.create({
  baseURL: "https://shop-dz8e.onrender.com" || "http://localhost:8000",
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
    `/api/shopitem/list?_page=${pageParam + 1}&_limit=3`
  );
  return data;
};

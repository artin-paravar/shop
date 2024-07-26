import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000" || "https://shop-dz8e.onrender.com",
});

export async function getProducts() {
  const { data } = await client(`/api/shopitem/list`);
  return data;
}

export async function getProduct(id: number) {
  const { data } = await client(`/api/shopitem/${id}`);
  return data;
}
//react query
export const Productsload = async ({ pageParam }: { pageParam: number }) => {
  const { data } = await client<any>(
    `/api/shopitem/list?page=${pageParam}&limit=4`
  );
  return data;
};

export async function searchandFilterItem(debounced: string, Category: string) {
  const { data } = await client(
    `/api/shopitem/list?search=${debounced}&&category=${Category}`
  );
  return data;
}

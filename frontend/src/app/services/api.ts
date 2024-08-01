import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const { data } = await client(`/api/shopitem/list`);
  return data;
}

export async function getProduct(id: any) {
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
export async function searchandFilterItem(
  { pageParam }: { pageParam: any },
  debounced: string | undefined
) {
  const { data } = await client(
    `/api/shopitem/list?page=${pageParam}&limit=4&&search=${debounced}`
  );
  return data;
}

export async function categoryApi(
  { pageParam }: { pageParam: any },
  Category: string | null | undefined
) {
  const { data } = await client(
    `/api/shopitem/list?page=${pageParam}&limit=6&&category=${Category}`
  );
  return data;
}

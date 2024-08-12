import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
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
  Category: string | null | undefined,
  brand: any,
  sort: string | null | undefined,
  max: string | number | undefined,
  min: string | number | undefined
) {
  const { data } = await client(
    `/api/shopitem/list?page=${pageParam}&&limit=6&&category=${Category}&&brand=${brand}&&sort=${sort}&&max=${max}&&min=${min}`
  );
  return data;
}

export async function categoryANDbrandAPI(
  Category: string | null | undefined,
  brand: any
) {
  const { data } = await client(
    `/api/shopitem/list?category=${Category}&brand=${brand}`
  );
  return data;
}

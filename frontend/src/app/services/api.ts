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
  brand: string | null | undefined,
  sort: string | null | undefined
) {
  const { data } = await client(
    `/api/shopitem/list?page=${pageParam}&&limit=6&&category=${Category}&&brand=${brand}&&sort=${sort}`
  );
  return data;
}

export async function categoryANDbrandAPI(
  Category: string | null | undefined,
  brand: string | null | undefined
) {
  const { data } = await client(
    `/api/shopitem/list?category=${Category}&brand=${brand}`
  );
  return data;
}

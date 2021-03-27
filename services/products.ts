import api from "../utils/api";

interface Params {
  perPage?: number
}

export async function getAllProducts({ perPage = 100 }: Params = {}): Promise<any> {
  const res = await api.get('products', {
    per_page: perPage
  })

  return {
    items: res.data
  }
}

export async function getAllCategories() {
  const res = await api.get('products/categories');
  const categories = res.data.filter((cat) => !cat.parent)

  return categories
}
import api from "../utils/api"

interface Params {
  perPage?: number
}

export async function getAllProducts({ perPage = 100 }: Params = {}) {
  const res = await api.get('products', {
    per_page: perPage
  })

  return {
    items: res.data
  }
}
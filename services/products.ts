import api from "../utils/api";

interface Params {
  perPage?: number
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Image {
  id: string;
  src: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  categories?: Array<Category>;
  images: Array<Image>;
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
  let categories = res.data.reduce((cats, cat) => {
    return {
      byId: { ...cats.byId, [cat.id]: { ...cat, items: [], itemsSlugs: [] } },
      allIds: [...cats.allIds, cat.id]
    }
  }, { byId: {}, allIds: [] })

  const groupedCategories = categories.allIds.reduce((cats, id) => {
    const cat = categories.byId[id];

    if (cat.parent) {
      let parent = categories.byId[cat.parent];

      parent.items.push(cat)
      parent.itemsSlugs.push(cat.slug)

      return cats;
    }

    return [...cats, cat]
  }, [])

  return groupedCategories
}
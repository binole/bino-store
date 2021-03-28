export async function getAllProducts() {
  const products = await require('../__fixtures__/products.json');

  return products;
}

export async function getAllCategories() {
  const data = await require('../__fixtures__/categories.json');

  const categories = data.reduce((cats, cat) => {
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

  return groupedCategories;
}
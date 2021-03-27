
export default function handler(req, res) {
  const data = require('../../__fixtures__/categories.json');
  let categories = data.reduce((cats, cat) => {
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

  res.status(200).json(groupedCategories)
}
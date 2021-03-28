export async function getAllProducts() {
  const products = await require('../__fixtures__/products.json');

  return products;
}
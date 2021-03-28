
export default function handler(req, res) {
  const { query: { slug } } = req;
  const products = require('../../../__fixtures__/products.json');

  const product = products.find(p => p.slug === slug);

  res.status(200).json(product)
}
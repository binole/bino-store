
export default function handler(req, res) {

  const products = require('../../../__fixtures__/products.json');

  res.status(200).json(products)
}
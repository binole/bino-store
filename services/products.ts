
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

const API_URL = process.env.API_URL;

export async function getAllProducts(): Promise<Product> {
  const res = await fetch(`${API_URL}/products`);
  const items = await res.json();

  return items
}

export async function getAllCategories(): Promise<Category> {
  const res = await fetch(`${API_URL}/categories`);
  const items = await res.json();

  return items
}
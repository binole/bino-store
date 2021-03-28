import Link from 'next/link';
import { useRouter } from 'next/router';
import Categories from '../../components/categories';
import Container from '../../components/container';
import Layout from '../../components/layout';
import ProductItem from '../../components/product-item';
import ProductList from '../../components/product-list';
import { getAllProducts } from '../../services/products';
import apiClient from '../../utils/api-client';

export async function getStaticProps() {
  const products = await getAllProducts();
  const categories = await apiClient('categories');

  return {
    props: {
      categories,
      products
    }
  }
}

export default function Products({ products, categories }) {
  const { query: { category = [] } } = useRouter();

  return (
    <Layout pageTitle='Products'>
      <Container className='my-6'>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 col sm:col-span-3">
            <aside>
              <Categories categories={categories} activeCategories={category} />
            </aside>
          </div>
          <div className="col-span-12 col sm:col-span-9">
            <ProductList
              items={products}
              activeCategories={category}
              renderItem={({ name, price, slug, images: [image] }) => {
                return (
                  <Link href={`/products/${slug}`}>
                    <a>
                      <ProductItem name={name} price={price} image={image.src} />
                    </a>
                  </Link>
                );
              }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}


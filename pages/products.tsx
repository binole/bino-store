import Head from 'next/head';
import { useRouter } from 'next/router';
import Categories from '../components/categories';
import Container from '../components/container';
import Layout from '../components/layout';
import ProductItem from '../components/product-item';
import apiClient from '../utils/api-client';

export async function getStaticProps() {
  const products = await apiClient('products');
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

  const filteredProducts = products.filter((p) => {
    const cats = p.categories.map(({ slug }) => slug);

    return category?.length ? cats.some(c => category.includes(c)) : p;
  })

  return (
    <>
      <Head>
        <title>Bino's Store - Products</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container className='my-6'>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col col-span-12 sm:col-span-3">
              <aside>
                <Categories categories={categories} activeCategories={category} />
              </aside>
            </div>
            <div className="col col-span-12 sm:col-span-9">
              <ol className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
                {filteredProducts.map(({ id, name, price, images: [image] }) => {
                  return (
                    <li key={id} data-testid='product-item'>
                      <ProductItem name={name} price={price} image={image.src} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}


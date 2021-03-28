import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/header';
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
    <div className='min-h-screen'>
      <Head>
        <title>Bino's Store - Products</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='container mx-auto my-6 px-4'>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col col-span-12 sm:col-span-3">
            <aside>
              <ul className="flex space-x-4 items-baseline sm:flex-col sm:space-x-0">
                <li className="mb-3">
                  <Link href={{ pathname: '/products' }}>
                    <a className="font-bold">All Categories</a>
                  </Link>
                </li>
                {categories.map(({ id, name, slug, itemsSlugs }) => {
                  const isActive = category?.includes(slug);

                  return (
                    <li key={id} className="mb-3">
                      <Link href={{ pathname: '/products', query: { category: [slug, ...itemsSlugs] } }}>
                        <a className={`text-black ${isActive ? 'underline' : 'text-opacity-50 hover:text-opacity-100'}`}>{name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>

          </div>
          <div className="col col-span-12 sm:col-span-9">
            <ol className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
              {filteredProducts.map(({ id, name, price, images: [image] }) => {
                return (
                  <li key={id} data-testid='product-item'>
                    <img src={image.src} alt="" className='w-full rounded' />
                    <h2 className='mt-3'>{name}</h2>
                    <div className='font-bold'>${price}</div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}


import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
        <title>xStore - Products</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className="">
        <div className="container mx-auto px-4 h-12 flex justify-between items-center">
          <a href="/" className="font-bold">xSTORE.</a>
          <button className="w-9 h-9 inline-flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </header>

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


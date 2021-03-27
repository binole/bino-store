import Head from 'next/head';
import { getAllProducts } from '../services/products';

export default function Home({ products }) {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Next Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className="border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="font-bold">xSTORE.</a>
          <button className="w-9 h-9 px-2 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </header>

      <main className='container mx-auto my-6 px-4'>
        <h1 className='text-4xl text-bold mb-8'>
          All Products
        </h1>
        <ol className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 '>
          {products.map(({ id, name, price, images: [image] }) => {
            return (
              <li key={id}>
                <img src={image.src} alt="" className='w-full rounded' />
                <h2 className='mt-3'>{name}</h2>
                <div className='font-bold'>${price}</div>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products.items
    }
  }
}
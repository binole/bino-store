import Head from 'next/head';
import { getAllProducts } from '../services/products';

export default function Home({ products }) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Head>
        <title>Next Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto my-6 px-4'>
        <h1 className='text-4xl text-bold mb-6'>
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
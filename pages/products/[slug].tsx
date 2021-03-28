import Image from 'next/image';
import Button from '../../components/button/Button';
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllProducts, getProduct } from '../../services/products';

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const product = await getProduct(slug);

  return {
    props: { product }
  }
}

export default function ProductDetail({ product }) {
  const { name, price, description, images: [image] } = product;

  return (
    <Layout>
      <Container className='md:mt-6'>
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 md:gap-6">
          <div className="sm:col-span-6 md:col-span-5">
            <Image src={image.src} alt="" width={800} height={800} className='block' />
          </div>
          <div className="sm:col-span-6 md:col-span-5 md:col-start-7">
            <div className="sm:py-3 md:py-6">
              <h1 className='text-2xl md:text-3xl'>{name}</h1>
              <div className='mb-2 text-lg font-bold md:text-2xl sm:mb-6'>${price}</div>
              <div className='mb-6 text-base leading-normal text-black md:text-md md:mb-12 text-opacity-70' dangerouslySetInnerHTML={{ __html: description }} />
              <Button className='w-full md:w-auto'>Add to cart - ${price}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
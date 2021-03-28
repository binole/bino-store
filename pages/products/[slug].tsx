import Container from "../../components/container";
import Layout from "../../components/layout";
import apiClient from "../../utils/api-client";

export async function getStaticPaths() {
  const products = await apiClient('products')

  const paths = products.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const product = await apiClient(`products/${slug}`)
  return {
    props: { product }
  }
}


export default function ProductDetail({ product }) {
  const { name } = product;

  return (
    <Layout>
      <Container>
        <h1>{name}</h1>
      </Container>
    </Layout>
  )
}
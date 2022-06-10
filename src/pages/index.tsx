import graphql from '../lib/graphql';
import getAllProducts from '../lib/graphql/queries/getAllProducts';
import { Grid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);
  return {
    props: {
      revalidate: 60,
      products,
    },
  };
};

export default function Home(props) {
  return (
    <Grid gridTemplateColumns='repeat(4, 1fr)' gap='5'>
      {props.products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </Grid>
  );
}

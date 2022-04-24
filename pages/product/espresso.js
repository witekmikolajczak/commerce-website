import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    // `name` is defined after hydrating client-side
    <h1>espresso</h1>
  );
};

export default Product;
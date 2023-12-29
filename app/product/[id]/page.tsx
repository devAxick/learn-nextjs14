import { NextPageProps } from '@/app/types';
import { NextPage } from 'next';

type PropType = {
  id: string;
};

const ProductPage: NextPage<NextPageProps<PropType>> = (props) => {
  console.log({ props });

  return <>Product page {props.params.id}</>;
};

export default ProductPage;

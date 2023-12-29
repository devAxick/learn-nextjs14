import { NextPageProps } from '@/app/types';
import Modal from '@/src/modules/common/components/Modal';
import { NextPage } from 'next';

type PropType = {
  id: string;
};

const ProductPage: NextPage<NextPageProps<PropType>> = (props) => {
  console.log({ props });

  return <Modal isOpened productId={props.params.id} />;
};

export default ProductPage;

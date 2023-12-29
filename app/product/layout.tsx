import { FC } from 'react';

const ProductLayout: FC<any> = (props) => {
  console.log({ layoutProps: props });

  return <>ProductLayout {props.children}</>;
};

export default ProductLayout;

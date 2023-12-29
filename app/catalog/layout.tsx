import Link from 'next/link';
import { FC } from 'react';

const CatalogLayout: FC<any & { product: React.ReactNode }> = ({
  children,
  product,
  ...restProps
}) => {
  console.log({ restProps });

  return (
    <div className="p-[10px]">
      Catalog layout
      <div>
        <Link href={'/product/1'}>Go to product</Link>
      </div>
      {children}
      {product}
    </div>
  );
};

export default CatalogLayout;

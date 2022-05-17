import { createContext, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps } from '../interfaces/product-interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export default function ProductCard({
  children,
  product,
  className,
}: ProductCardProps) {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
}

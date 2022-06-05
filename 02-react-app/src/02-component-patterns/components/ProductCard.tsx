import { createContext, CSSProperties, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
  Product,
  ProductCardOnChangeArgs,
  ProductContextProps,
} from '../interfaces/product-interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: ProductCardOnChangeArgs) => void;
  value?: number;
}

export default function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

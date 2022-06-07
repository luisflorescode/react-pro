import { createContext, CSSProperties, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
  Product,
  ProductCardInitialValues,
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
  initialValues?: ProductCardInitialValues;
}

export default function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export function ProductTitle({ title, className, style }: ProductTitleProps) {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title || product.title}
    </span>
  );
}

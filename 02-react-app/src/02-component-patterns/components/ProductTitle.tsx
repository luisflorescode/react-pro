import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
  className?: string;
  title?: string;
}

export function ProductTitle({ title, className }: ProductTitleProps) {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title || product.title}
    </span>
  );
}

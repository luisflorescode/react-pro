import { ProductCardHOCProps } from '../interfaces/product-interfaces';
import { ProductButtons } from './ProductButtons';
import ProductCardHOC from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

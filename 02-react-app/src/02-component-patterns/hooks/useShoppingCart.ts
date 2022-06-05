import { useState } from 'react';
import {
  ProductCardOnChangeArgs,
  ProductInCart,
} from '../interfaces/product-interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: ProductCardOnChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (!count) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;

        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

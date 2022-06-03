import { useState } from 'react';
import {
  Product,
  ProductCardOnChangeArgs,
} from '../interfaces/product-interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: ProductCardOnChangeArgs) => void;
}

export default function useProduct({ onChange, product }: UseProductArgs) {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
}

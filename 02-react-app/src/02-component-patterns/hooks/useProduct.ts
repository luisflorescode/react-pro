import { useEffect, useState } from 'react';
import {
  Product,
  ProductCardOnChangeArgs,
} from '../interfaces/product-interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: ProductCardOnChangeArgs) => void;
  value?: number;
}

export default function useProduct({
  onChange,
  product,
  value = 0,
}: UseProductArgs) {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
}

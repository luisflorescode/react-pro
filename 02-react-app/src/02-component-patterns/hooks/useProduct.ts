import { useEffect, useRef, useState } from 'react';
import {
  Product,
  ProductCardInitialValues,
  ProductCardOnChangeArgs,
} from '../interfaces/product-interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: ProductCardOnChangeArgs) => void;
  value?: number;
  initialValues?: ProductCardInitialValues;
}

export default function useProduct({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
  };
}

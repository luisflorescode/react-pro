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
    const sum = initialValues?.maxCount
      ? Math.min(counter + value, initialValues.maxCount)
      : counter + value;
    const newValue = Math.max(sum, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
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
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
}

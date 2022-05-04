import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function useCounter({ maxCount = 10 }) {
  const [counter, setCounter] = useState(0);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  const handlePlusClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: 'bounce',
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    counterElement,
    handlePlusClick,
  };
}

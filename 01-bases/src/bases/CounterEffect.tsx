import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export function CounterEffect() {
  const [counter, setCounter] = useState(0);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handlePlusClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
    tl.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce' });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handlePlusClick}>+1</button>
    </>
  );
}

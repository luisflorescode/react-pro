import { useCounter } from '../hooks/useCounter';

export function CounterHook() {
  const { counter, elementToAnimate, handlePlusClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handlePlusClick}>+1</button>
    </>
  );
}

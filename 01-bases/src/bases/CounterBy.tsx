import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface State {
  counter: number;
  clicks: number;
}

export function CounterBy(props: Props) {
  const { initialValue = 0 } = props;

  const [{ counter, clicks }, setState] = useState<State>({
    counter: initialValue,
    clicks: 0,
  });

  const handlePlusClick = (increment: number) => {
    setState(({ counter, clicks }) => ({
      counter: counter + increment,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handlePlusClick(1)}>+1</button>
      <button onClick={() => handlePlusClick(5)}>+5</button>
    </>
  );
}

import { useState } from 'react';

interface Props {
  initialValue?: number;
}

export function Counter(props: Props) {
  const { initialValue = 0 } = props;

  const [counter, setCounter] = useState(initialValue);

  const handlePlusClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handlePlusClick}>+1</button>
    </>
  );
}

import { useReducer } from 'react';
import * as actions from './actions';
import { CounterState } from './interfaces';
import { counterReducer } from './state';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export function CounterReducer() {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleResetClick = () => {
    dispatch(actions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleResetClick}>reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
}

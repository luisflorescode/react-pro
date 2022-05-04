import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

export default function App() {
  return (
    <>
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterHook/>
    </>
  );
}

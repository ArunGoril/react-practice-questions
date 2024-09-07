import React from "react";
import useCounter from "./useCounter";

const CounterUsingCustomHook = () => {
  const [count, increment, decrement, reset] = useCounter(); // useCounter(10)
  return (
    <div>
      <h2>Coustom Hook Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterUsingCustomHook;

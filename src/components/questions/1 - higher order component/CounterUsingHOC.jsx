import React from "react";
import withCounter from "./hoc";

const CounterUsingHOC = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <h2>HOC Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default withCounter(CounterUsingHOC);

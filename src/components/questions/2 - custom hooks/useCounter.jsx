import { useState } from "react";

const useCounter = (countInitialvalue=0) => {
  const [count, setCount] = useState(countInitialvalue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(countInitialvalue);
  return [count, increment, decrement, reset];
};

export default useCounter;

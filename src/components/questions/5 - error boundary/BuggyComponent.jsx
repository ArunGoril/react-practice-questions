import React, { useState } from "react";

const BuggyComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  if (count === 2) {
    throw new Error("Crashed");
  }
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default BuggyComponent;

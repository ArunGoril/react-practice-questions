import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => setCount(count + 1);
  const addTodo = useCallback(() => setTodos([...todos, "new todo"]), [todos]);

  return (
    <div>
      <h2>Use Callback Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
};

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("inside my todo");
  return (
    <div>
      <h4>Todos</h4>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});

export default UseCallback;

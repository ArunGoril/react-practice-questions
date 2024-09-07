import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UseContext = () => {
  const user = "Arun";
  return (
    <UserContext.Provider value={user}>
      <h2>Use Context Example</h2>
      <p>hello {user}</p>
      <Component1 />
    </UserContext.Provider>
  );
};

export default UseContext;

const Component1 = () => {
  return (
    <div>
      <h4>Component1</h4>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <h4>Component2</h4>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h4>Component3</h4>
      <p>hello {user} again!</p>
    </div>
  );
};

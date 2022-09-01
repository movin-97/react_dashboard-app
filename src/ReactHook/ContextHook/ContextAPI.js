import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [user, setUser] = useState([
    "One Components",
    "Two Components",
    "Three Components",
  ]);

  return (
    <Context.Provider value={[user, setUser]}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

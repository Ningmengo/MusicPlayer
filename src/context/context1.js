import React, { createContext, useContext, useState } from "react";

//1. create a context target
const context1 = createContext();

//2. create a context function to return the target by using useContext
export const useContext1 = () => {
  return useContext(context1);
};

//3. create a provider that initialize states inside, return its value="state"
export const Context1Provider = ({ children }) => {
  const [testState, setTestState] = useState("1");

  return (
    <context1.Provider value={{ testState }}>{children}</context1.Provider>
  );
};

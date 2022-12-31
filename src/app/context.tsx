import React, { useState } from "react";

export const context = React.createContext({});

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  let [collapse, setCollapse] = useState<boolean>(true);
  let handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <context.Provider
      value={{
        collapse,
        handleCollapse,
      }}
    >
      {children}
    </context.Provider>
  );
};

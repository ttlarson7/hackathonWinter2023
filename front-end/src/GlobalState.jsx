import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalRace, setGlobalRace] = useState('');
  const [globalClass, setGlobalClass] = useState('');
  const [globalAlignment, setGlobalAlignment] = useState('');
  const [globalBackground, setGlobalBackground] = useState('');
  
  return (
    <GlobalStateContext.Provider
      value={{ 
        globalRace,
        setGlobalRace,
        globalClass,
        setGlobalClass,
        globalAlignment,
        setGlobalAlignment,
        globalBackground,
        setGlobalBackground
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

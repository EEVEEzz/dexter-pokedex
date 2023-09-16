import { createContext, useReducer } from "react";
import AbilityReducer from "./AbilityReducer";

const AbilityContext = createContext();

export const AbilityProvider = ({ children }) => {
  const initialState = {
    ability: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(AbilityReducer, initialState);

  return (
    <AbilityContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AbilityContext.Provider>
  );
};

export default AbilityContext;
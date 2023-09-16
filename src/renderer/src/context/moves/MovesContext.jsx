import { createContext, useReducer } from "react";
import MovesReducer from "./MovesReducer";

const MovesContext = createContext();

export const MovesProvider = ({ children }) => {
  const initialState = {
    move: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovesReducer, initialState);

  return (
    <MovesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
};

export default MovesContext;

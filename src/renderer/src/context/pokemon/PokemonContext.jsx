import { createContext, useReducer } from "react";
import PokemonReducer from "./PokemonReducer";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const initialState = {
    pokemon: {},
    pokemany: [],
    species: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

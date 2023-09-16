const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMON':
        return {
            ...state,
            pokemany: action.payload,
            pokemon:{},
            loading: true
        }
    case 'GET_POKEMON':
        return {
            ...state,
            pokemon: action.payload,
            loading: true
        }
    case 'GET_SPECIES':
        return {
            ...state,
            species: action.payload,
            loading: true
        }
    case 'CLEAR_POKEMON':
        return {
            ...state,
            pokemany:[],
            loading: false
        }
    case 'CLEAR_SINGLE_POKEMON':
        return {
            ...state,
            pokemon:{},
            loading: false
        }
    case 'SET_LOADING':
        return {
            ...state,
            loading: false
        }
    default:
      return state;
  }
};

export default PokemonReducer
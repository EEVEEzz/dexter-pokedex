const AbilityReducer = (state, action) => {
    switch (action.type) {
      case "GET_ABILITY":
        return {
          ...state,
          ability: action.payload,
          loading: true
        };
    }
  };
  
  export default AbilityReducer;
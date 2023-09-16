const MovesReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVE":
      return {
        ...state,
        move: action.payload,
        loading: true
      };
  }
};

export default MovesReducer;

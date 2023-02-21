function Reducer(state, action) {
  switch (action.type) {
    case "ENTER_DATA":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "TEMP_UPDATE":
      
      return {
        ...state,
        genres: state.genres
        ? state.genres.concat(`${action.value}`,)
        : action.value
      }
    default:
      return state;
  }
}

export default Reducer;

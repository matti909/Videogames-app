
const initialState = {
  videogame: {},
  videogames: [],
  byname: [],
  bygen: [],
  genres: [],
};

function rootReducer(state = initialState, action) {
  let arrayAux = [];
  let arrayAux2 = [];
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return { ...state, videogames: action.payload };
    case "GET_DETAIL":
      return { ...state, videogame: action.payload };
    case "GET_BYNAME":
      return { ...state, byname: action.payload };
    case "GET_GENRES":
      return { ...state, genres: action.payload };
    case "GET_BYGENRES":
      return { ...state, bygen: action.payload };
    case "CLEAR_DETAIL":
      return { ...state, videogame: {} };
    case "CLEAR_GEN":
      return { ...state, bygen: [] };

    case "ORDER_ASC":
      if (state.bygen.length > 0) {
        arrayAux = state.bygen.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        arrayAux = state.videogames.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      }
      arrayAux2 = arrayAux.map((game) => game);
      return {
        ...state,
        videogames: arrayAux2,
      };

    case "ORDER_DES":
      if (state.bygen.length > 0) {
        arrayAux = state.bygen.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      } else {
        arrayAux = state.videogames.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }
      arrayAux2 = arrayAux.map((game) => game);
      return {
        ...state,
        videogames: arrayAux2,
      };

    case "ORDER_RATING_MIN":
      if (state.bygen.length > 0) {
        arrayAux = state.bygen.sort((a, b) => {
          if (Number(a.rating) < Number(b.rating)) return -1;
          if (Number(a.rating) > Number(b.rating)) return 1;
          return 0;
        });
      } else {
        arrayAux = state.videogames.sort((a, b) => {
          if (Number(a.rating) < Number(b.rating)) return -1;
          if (Number(a.rating) > Number(b.rating)) return 1;
          return 0;
        });
      }
      arrayAux2 = arrayAux.map((game) => game);
      return {
        ...state,
        bygen: arrayAux2,
      };

    case "ORDER_RATING_MAX":
      if (state.bygen.length > 0) {
        arrayAux = state.bygen.sort((a, b) => {
          if (Number(a.rating) > Number(b.rating)) return -1;
          if (Number(a.rating) < Number(b.rating)) return 1;
          return 0;
        });
      } else {
        arrayAux = state.videogames.sort((a, b) => {
          if (Number(a.rating) > Number(b.rating)) return -1;
          if (Number(a.rating) < Number(b.rating)) return 1;
          return 0;
        });
      }
      arrayAux2 = arrayAux.map((game) => game);
      return {
        ...state,
        bytemp: arrayAux2,
      };

    default:
      return state;
  }
}

export default rootReducer;
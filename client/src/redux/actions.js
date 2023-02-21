import axios from "axios";

export const getVideogames = () => async (dispatch) => {
  let res = await axios.get("/videogames");
  let data = res.data;

  return dispatch({
    type: "GET_VIDEOGAMES",
    payload: data,
  });
};

export const getGenres = () => async (dispatch) => {
  let res = await axios.get("/genres");
  let data = res.data;

  return dispatch({
    type: "GET_GENRES",
    payload: data,
  });
};

export const getByName = (value) => async (dispatch) => {
  let res = await axios.get(`/videogames?name=${value}`)
  let data = res.data;

  return dispatch({
    type: "GET_BYNAME",
    payload: data
  })
}

export const getDetail = (id) => async (dispatch) => {
  let res = await axios.get(`/videogames/${id}`);
  let data = res.data;

  return dispatch({
    type: "GET_DETAIL",
    payload: data,
  });
};

export const getByGenre = (value) => async (dispatch) => {
  let res = await axios.get(`/filter?genres=${value}`);
  let data = res.data;
  return dispatch({
    type: "GET_BYGENRES",
    payload: data,
  });
};

export function filterVideogamesByGenre(payload) {
  return  {
      type: 'FILTER_BY_GENRE',
      payload
  }
}

export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload
  }
}

export function orderByRating(payload) {
  return {
      type: 'ORDER_BY_RATING',
      payload
  }
}

export const clearGames = () => {
  return {
    type: "CLEAR_GAMES",
  };
};


export const clearByTemp = () => {
  return {
    type: "CLEAR_GEN",
  };
};

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}
export const ordenarAsc = () => {
  return {
    type: "ORDER_ASC",
  };
};

export const ordenarDes = () => {
  return {
    type: "ORDER_DES",
  };
};

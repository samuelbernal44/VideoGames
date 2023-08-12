import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';
export const GET_GAME = 'GET_GAME';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export const getGames = () => {
  return async function (dispatch) {
    let games = [];
    let page = 1;
    while (games.length < 100) {
      const apiData = await axios.get(
        `http://localhost:3001/videogames?page=${page}`
      );
      games = games.concat(apiData.data.games);
      page++;
    }
    games = games.slice(0, 100);
    dispatch({ type: GET_GAMES, payload: games });
  };
};

export const getGame = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    const game = apiData.data;
    dispatch({ type: GET_GAME, payload: game });
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/videogame/name?name=${name}`
    );
    const games = apiData.data;
    dispatch({ type: SEARCH_BY_NAME, payload: games });
  };
};

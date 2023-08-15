import { GET_GAMES, GET_GAME, SEARCH_BY_NAME, CLEAR_GAME } from './actions';

const initialState = {
  games: [],
  game: [],
  searchResults: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload };
    case GET_GAME:
      return { ...state, game: action.payload };
    case SEARCH_BY_NAME:
      return { ...state, searchResults: action.payload };
    case CLEAR_GAME:
      return { ...state, game: [] };
    default:
      return { ...state };
  }
};

export default rootReducer;

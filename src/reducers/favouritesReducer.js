import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favourites: [],
  displayFavourites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        favourites: state.favourites.filter((fav) => action.payload !== fav.id),
      };
    case ADD_FAVORITE:
      let favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return {
        ...state,
        favourites: [...state.favourites, favoriteMovie],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavourites: !state.displayFavourites,
      };
    default:
      return state;
  }
};

export default reducer;

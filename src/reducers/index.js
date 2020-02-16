import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import creditsReducer from "./creditsReducer";
import personReducer from "./personReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  credits: creditsReducer,
  person: personReducer,
  error: errorReducer
});

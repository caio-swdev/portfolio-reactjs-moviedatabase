import { GET_MOVIES, GET_ERRORS } from "./types";
import { API_Key } from "../config/api-key";

const fetchPopMovies = async () => {
  const movieListRaw = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  const movieList = movieListRaw.json();
  return movieList;
};

export const getMovies = () => dispatch => {
  fetchPopMovies()
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

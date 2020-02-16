import { GET_MOVIE, GET_ERRORS } from "./types";
import { API_Key } from "../config/api-key";

const fetchMovie = async movie_id => {
  const movieRaw = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_Key}`
  );
  const movie = movieRaw.json();
  return movie;
};

export const getMovie = movie_id => dispatch => {
  fetchMovie(movie_id)
    .then(res => {
      dispatch({
        type: GET_MOVIE,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

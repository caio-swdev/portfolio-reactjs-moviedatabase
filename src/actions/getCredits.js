import { GET_CREDITS, GET_ERRORS } from "./types";
import { API_Key } from "../config/api-key";

const fetchCredits = async movie_id => {
  const creditsListRaw = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_Key}`
  );
  const creditsList = creditsListRaw.json();
  return creditsList;
};

export const getCredits = movie_id => dispatch => {
  fetchCredits(movie_id)
    .then(res => {
      dispatch({
        type: GET_CREDITS,
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

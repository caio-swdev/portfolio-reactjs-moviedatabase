import { GET_PERSON, GET_ERRORS } from "./types";
import { API_Key } from "../config/api-key";

const fetchPerson = async person_id => {
  const personRaw = await fetch(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=${API_Key}`
  );
  const person = personRaw.json();
  return person;
};

export const getPerson = person_id => dispatch => {
  fetchPerson(person_id)
    .then(res => {
      dispatch({
        type: GET_PERSON,
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

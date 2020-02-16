import { GET_PERSON } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_PERSON:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

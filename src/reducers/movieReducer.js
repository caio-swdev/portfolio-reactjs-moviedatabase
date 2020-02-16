import { GET_MOVIE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

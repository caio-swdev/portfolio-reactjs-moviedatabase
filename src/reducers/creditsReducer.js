import { GET_CREDITS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CREDITS:
      return {
        ...state,
        cast: action.payload.cast.map(actor => {
          return {
            ...actor
          };
        })
      };
    default:
      return state;
  }
}

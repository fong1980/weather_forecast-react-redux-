import { GET_WEATHER } from "../actions/weather";

export default (state = { list: [] }, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

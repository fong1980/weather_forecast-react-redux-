import { GET_DAY_WEATHER } from "../actions/weather";

export default (state = null, action) => {
  switch (action.type) {
    case GET_DAY_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

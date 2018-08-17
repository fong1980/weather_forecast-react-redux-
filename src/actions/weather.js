export const GET_WEATHER = "GET_WEATHER";

export const getWeather = city => {
  return {
    type: GET_WEATHER,
    payload: console.log("actions working?")
  };
};

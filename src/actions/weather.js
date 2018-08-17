export const GET_WEATHER = "GET_WEATHER";

export const getWeather = country => {
  return {
    type: GET_WEATHER,
    payload: country
  };
};

import * as request from "superagent";

export const GET_WEATHER = "GET_WEATHER";
export const GET_DAY_WEATHER = "GET_DAY_WEATHER";

export const getWeather = cityCountry => (dispatch, getState) => {
  const city = cityCountry.city;
  const country = cityCountry.country;
  const apiKey = "92aa6311977d4ced945bf75808bd0097";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&APPID=${apiKey}`; //eigen key
  request
    .get(url)
    .then(response =>
      dispatch({
        type: GET_WEATHER,
        payload: response.body
      })
    )
    .catch(err => alert("No such city or country, try again"));
};
// };

//getWDayWeather

export const getWDayWeather = cityCountry => (dispatch, getState) => {
  const city = cityCountry.city;
  const country = cityCountry.country;
  const apiKey = "92aa6311977d4ced945bf75808bd0097";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&APPID=${apiKey}`; //eigen key
  request
    .get(url)
    .then(response =>
      dispatch({
        type: GET_DAY_WEATHER,
        payload: response.body
      })
    )
    .catch(err => alert("No such city or country, try again"));
};

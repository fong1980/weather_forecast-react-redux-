import * as request from "superagent";

export const GET_WEATHER = "GET_WEATHER";
export const GET_DAY_WEATHER = "GET_DAY_WEATHER";

// "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";
// "https://dog.ceo/api/breeds/image/random";
// "https://api.openweathermap.org/data/2.5/forecast?q=amsterdam,nl&mode=json&APPID=92aa6311977d4ced945bf75808bd0097";
// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=92aa6311977d4ced945bf75808bd0097"; //key van iemand anders

export const getWeather = cityCountry => (dispatch, getState) => {
  // let city;
  // let country;
  // if (!cityCountry) {
  //   city = "";
  //   country = "";
  //   console.log("state is empty");
  // } else {
  // console.log(city, "-----");
  const city = cityCountry.city; //"amsterdam";
  const country = cityCountry.country; //"netherland";
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
  // let city;
  // let country;
  // if (!cityCountry) {
  //   city = "";
  //   country = "";
  //   console.log("state is empty");
  // } else {
  const city = cityCountry.city; //"amsterdam";
  const country = cityCountry.country; //"netherland";
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
// };

// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

// api.openweathermap.org/data/2.5/weather?q=London,uk

import * as request from "superagent";
// import ReduxThunk from "redux-thunk";

export const GET_WEATHER = "GET_WEATHER";

// "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";
// "https://dog.ceo/api/breeds/image/random";
// "https://api.openweathermap.org/data/2.5/forecast?q=amsterdam,nl&mode=json&APPID=92aa6311977d4ced945bf75808bd0097";
// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=92aa6311977d4ced945bf75808bd0097"; //key van iemand anders

export const getWeather = cityCountry => (dispatch, getState) => {
  let city;
  let country;
  if (!cityCountry) {
    city = "amsterdam";
    country = "nl";
    console.log("test");
  } else {
    console.log(city, "-----");
    city = cityCountry.city; //"amsterdam";
    country = cityCountry.country; //"netherland";
    const apiKey = "92aa6311977d4ced945bf75808bd0097";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&APPID=${apiKey}`; //eigen key

    console.log(city);
    request
      .get(url)
      .then(response =>
        dispatch({
          type: GET_WEATHER,
          payload: response.body
        })
      )
      .catch(err => alert(err));
  }
};

// export const getWeather = country => {
//   return {
//     type: GET_WEATHER,
//     payload: country
//   };
// };

// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

import * as request from "superagent";
import ReduxThunk from "redux-thunk";
export const GET_WEATHER = "GET_WEATHER";
const city = "londen";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=63277b7d1659feea037e0895b163f1f5";
// "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";
// "https://dog.ceo/api/breeds/image/random";

//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=63277b7d1659feea037e0895b163f1f5

export const getWeather = country => (dispatch, getState) => {
  request
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=paris,mode=json,uk&APPID=63277b7d1659feea037e0895b163f1f5`
    )
    .then(response =>
      dispatch({
        type: GET_WEATHER,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

// export const getWeather = country => {
//   return {
//     type: GET_WEATHER,
//     payload: country
//   };
// };

// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

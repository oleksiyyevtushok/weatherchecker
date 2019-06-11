import axios from 'axios';
import { GET_WEATHER, GET_WEATHER_COORD } from './types';

const getWeather = city => dispatch => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=05064d4e6bb8d9b3a232a8ed69a63329`,
    )
    .then(res => {
      dispatch({
        type: GET_WEATHER,
        payload: res,
      });
    })
    .catch(err => alert('City does not exist'));
};

const getWeatherByCoordinate = (lat, lon) => dispatch => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=05064d4e6bb8d9b3a232a8ed69a63329
      `,
    )
    .then(res => {
      dispatch({
        type: GET_WEATHER_COORD,
        payload: res,
      });
    })
    .catch(err => alert('Something went wrong. Error: ' + err));
};

export { getWeather, getWeatherByCoordinate };

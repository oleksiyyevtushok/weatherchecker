import axios from 'axios';
import { GET_WEATHER } from './types';

const getWeather = city => dispatch => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=05064d4e6bb8d9b3a232a8ed69a63329`,
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_WEATHER,
        payload: res,
      });
    });
};

export { getWeather };

import { GET_WEATHER } from '../actions/types';

const initialState = {
  currCity: null,
  data: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER: {
      if (action.payload.status === 200) {
        return {
          currCity: action.payload.data.name,
          data: action.payload,
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}

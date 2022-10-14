import { GET_WEATHER_DATA, ActionTypes } from "../Actions/WeatherDataAction";
import { Weather } from "../Interfaces/Weather";

const initialState: Weather = {
  fact: "",
  length: 0,
};

export const weatherReducer = (state = initialState, action: ActionTypes) => {
  if (action.type === GET_WEATHER_DATA) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};

import { AnyAction, Dispatch } from "redux";
import { Weather } from "../Interfaces/Weather";

export const GET_WEATHER_DATA = "GET_WEATHER_DATA";
export type ActionTypes = GetWeatherData;

export type GetWeatherData = {
  type: typeof GET_WEATHER_DATA;
  payload: Weather;
};

export const getWeatherData = () => {
  debugger;
  return async (dispatch: Dispatch<AnyAction>) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?appid=d90bb647941b933f55f73738b69a7c4e&lat=33.6938118&lon=73.0651511"
    );
    debugger;
    const responseJSON = await response.json();
    return dispatch({
      type: GET_WEATHER_DATA,
      payload: responseJSON,
    });
  };
};

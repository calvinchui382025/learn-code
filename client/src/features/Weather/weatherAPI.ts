import axios from 'axios';
import {store} from '../../app/store';
//======================================================
const WeatherAPIBaseURL = 'http://api.weatherapi.com/v1';
const WeatherAPIKey = 'bed04062ad3b4779b0950016221212';
//======================================================
export const requestCurrentWeather = async () => { // just fetch forecast weather, it also includes current weather
  const state = store.getState();
  const location = state.weather.searchInputValue;
  const forecastWeatherURL = `${WeatherAPIBaseURL}/forecast.json`;
  const forecastWeatherParams = {
    key: WeatherAPIKey,
    q: location,
    days: 7,
  }
  const forecastWeather = await axios.get(forecastWeatherURL, { params: forecastWeatherParams });
  const response: any = {};
  if (forecastWeather.status === 200) {
    const { data } = forecastWeather;
    const { forecast, current, location } = data;

    response.name = location.name;
    response.condition = current.condition.text;
    response.conditionCode = current.condition.code;
    response.temp = current.temp_f;
    response.minTemp = forecast.forecastday[0].day.mintemp_f;
    response.maxTemp = forecast.forecastday[0].day.maxtemp_f;
  };
  
  return response;
}
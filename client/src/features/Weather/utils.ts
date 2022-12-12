import axios from 'axios';

//======================================================
export const conditionMeta: any = {
  "1000": {
      "condition": "Sunny",
      "video": "/videos/Clear.mp4",
      "textColor": "gainsboro"
    },
  "1003": {
      "condition": "Partly cloudy",
      "video": "/videos/Overcast.mp4",
      "textColor": "black"
    },
  "1006": {
      "condition": "Cloudy",
      "video": "/videos/Overcast.mp4",
      "textColor": "black"
    },
  "1009": {
      "condition": "Overcast",
      "video": "/videos/Overcast.mp4",
      "textColor": "black"
    },
  "1030": {
      "condition": "Mist",
      "video": "/videos/Misty.mp4",
      "textColor": "black"
    },
  "1063": {
      "condition": "Patchy rain possible",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1066": {
      "condition": "Patchy snow possible",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1069": {
      "condition": "Patchy sleet possible",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1072": {
      "condition": "Patchy freezing drizzle possible",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1087": {
      "condition": "Thundery outbreaks possible",
      "video": "/videos/Thunderstorm.mp4",
      "textColor": "black"
    },
  "1114": {
      "condition": "Blowing snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1117": {
      "condition": "Blizzard",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1135": {
      "condition": "Fog",
      "video": "/videos/Misty.mp4",
      "textColor": "black"
    },
  "1147": {
      "condition": "Freezing fog",
      "video": "/videos/Misty.mp4",
      "textColor": "black"
    },
  "1150": {
      "condition": "Patchy light drizzle",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1153": {
      "condition": "Light drizzle",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1168": {
      "condition": "Freezing drizzle",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1171": {
      "condition": "Heavy freezing drizzle",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1180": {
      "condition": "Patchy light rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1183": {
      "condition": "Light rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1186": {
      "condition": "Moderate rain at times",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1189": {
      "condition": "Moderate rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1192": {
      "condition": "Heavy rain at times",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1195": {
      "condition": "Heavy rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1198": {
      "condition": "Light freezing rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1201": {
      "condition": "Moderate or heavy freezing rain",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1204": {
      "condition": "Light sleet",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1207": {
      "condition": "Moderate or heavy sleet",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1210": {
      "condition": "Patchy light snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1213": {
      "condition": "Light snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1216": {
      "condition": "Patchy moderate snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1219": {
      "condition": "Moderate snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1222": {
      "condition": "Patchy heavy snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1225": {
      "condition": "Heavy snow",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1237": {
      "condition": "Ice pellets",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1240": {
      "condition": "Light rain shower",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1243": {
      "condition": "Moderate or heavy rain shower",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1246": {
      "condition": "Torrential rain shower",
      "video": "/videos/Rainy.mp4",
      "textColor": "black"
    },
  "1249": {
      "condition": "Light sleet showers",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1252": {
      "condition": "Moderate or heavy sleet showers",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1255": {
      "condition": "Light snow showers",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1258": {
      "condition": "Moderate or heavy snow showers",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1261": {
      "condition": "Light showers of ice pellets",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1264": {
      "condition": "Moderate or heavy showers of ice pellets",
      "video": "/videos/Snowy.mp4",
      "textColor": "black"
    },
  "1273": {
      "condition": "Patchy light rain with thunder",
      "video": "/videos/Thunderstorm.mp4",
      "textColor": "black"
    },
  "1276": {
      "condition": "Moderate or heavy rain with thunder",
      "video": "/videos/Thunderstorm.mp4",
      "textColor": "black"
    },
  "1279": {
      "condition": "Patchy light snow with thunder",
      "video": "/videos/Thunderstorm.mp4",
      "textColor": "black"
    },
  "1282": {
      "condition": "Moderate or heavy snow with thunder",
      "video": "/videos/Thunderstorm.mp4",
      "textColor": "black"
    },
}
//======================================================

export const gridFormer = (data: any[]) => {
  const isMobile = window.innerWidth <= 768;
  const rowSize = isMobile ? 1 : 3;
  const newGrid: any[] = [];
  let temp: any[] = [];
  data.forEach((dataPoint: any, i: number) => {
    temp.push(dataPoint);
    if(
      temp.length === rowSize
      || i === data.length - 1
    ) {
      newGrid.push(temp);
      temp = [];
    }
  })
  return newGrid;
}
//======================================================
//======================================================
const WeatherAPIBaseURL = 'http://api.weatherapi.com/v1';
const WeatherAPIKey = 'bed04062ad3b4779b0950016221212';

// Current weather	        /current.json or /current.xml
// Forecast	                /forecast.json or /forecast.xml
// Search or Autocomplete	  /search.json or /search.xml
// History	                /history.json or /history.xml
// Future	                  /future.json or /future.xml
//======================================================
export const requestCurrentWeather = async (location: string) => { // just fetch forecast weather, it also includes current weather
  const forecastWeatherURL = `${WeatherAPIBaseURL}/forecast.json`;
  const forecastWeatherParams = {
    key: WeatherAPIKey,
    q: location,
    days: 7,
  }
  const forecastWeather = await axios.get(forecastWeatherURL, { params: forecastWeatherParams });
  console.log({ forecastWeather });
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

  console.log({ response });
  return response;
}
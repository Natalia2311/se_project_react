import { handleResponse } from './api.js';


const latitude = 44.34;
const longitude = 10.99;
const APIkey = "77616fc803373509ceb36eaa15b87da9";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleResponse);

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && data.main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  console.log(Math.ceil(temperature));
  console.log(weather);
  return weather;
};

export const parseLoacation = (data) => {
  const city = data.name;
  return city;
};

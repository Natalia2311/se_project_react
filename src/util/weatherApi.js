

const latitude = 44.34;
const longitude = 10.99;
const APIkey = '77616fc803373509ceb36eaa15b87da9';

export const getForecastWeather =() => {
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
    ).then((res) => {

        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }).then((data) => {
        return parseWeatherData(data);
    });
    return weatherApi;
};

export const parseWeatherData = (data) => {
    const main = data.main;
    const temperature = main && data.main.temp;
    const type = data.type;
    const conditions = type && type[0].main;
    const currentTime = data.dt;
    const misc = data.sys;
    const sunrise = misc && misc.sunrise;
    const sunset = misc && misc.sunset;
    console.log(Math.ceil(temperature));
    return Math.ceil(temperature);
   
}

export const parseLoacation = (data) => {
    const city = data.name;
    return city;
}


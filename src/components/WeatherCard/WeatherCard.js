import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { useContext } from "react";

const WeatherCard = ({ day, type = "cloudy", weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("weather card");
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp}°{currentTemperatureUnit}{" "}
      </div>
      <img src={imageSrcUrl} className="weather_image" alt="Weather icon" />
    </section>
  );
};

export default WeatherCard;

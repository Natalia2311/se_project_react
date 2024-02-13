import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";



const WeatherCard = ({ day, type = "cloudy", weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather_image" alt="Weather icon"/>
    </section>
  );
};

export default WeatherCard;

import { clothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { weather } from "../../utils/weatherApi";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 86;
  const weather = weatherTemp;

  const weatherType = useMemo(() => {
    const tempF = weather.temperature?.F;
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  console.log(weatherType);
  const filteredCards = clothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);
  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              id={item.id}
              link={item.link}
              name={item.name}
              weather={item.weather}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;


// And cards don't appear on the root route also because the code for filtering doesn't work:

// // Filter clothingItems based on weather temperature
// const filteredClothingItems = clothingItems.filter((item) => {
//   // Assuming each item has a property 'minTemperature' and 'maxTemperature'
//   const minTemp = item.minTemperature;
//   const maxTemp = item.maxTemperature;

//   return weatherTemp >= minTemp && weatherTemp <= maxTemp;
// });
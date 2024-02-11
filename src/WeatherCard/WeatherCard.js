const weatherOptions = [
    { url: require ("../images/day/sunny.svg").default, day: true, type: "sunny" },
    { url: require ("../images/day/cloudy.svg").default, day: true, type: "cloudy" },
    { url: require ("../images/day/fog.svg").default, day: true, type: "fog" },
    { url: require ("../images/day/rain.svg").default, day: true, type: "rain" },
    { url: require ("../images/day/snow.svg").default, day: true, type: "snow" },
    { url: require ("../images/day/storm.svg").default, day: true, type: "storm" },
    { url: require ("../images/day/sunny.svg").default, day: false, type: "sunny" },
    { url: require ("../images/day/cloudy.svg").default, day: false, type: "cloudy" },
    { url: require ("../images/day/fog.svg").default, day: false, type: "fog" },
    { url: require ("../images/day/rain.svg").default, day: false, type: "rain" },
    { url: require ("../images/day/snow.svg").default, day: false, type: "snow" },
    { url: require ("../images/day/storm.svg").default, day: false, type: "storm" },
];

const WeatherCard = ({ day, type = "cloudy", weatherTemp = "" }) => {
    console.log("weather card");
    const imageSrc = weatherOptions.find((i) => {
      
        return i.day === day && i.type === type;
   const currentWeather = weatherOptions.find((condition) => {
    return condition.day === day && condition.type === type;
 }); 
    });
 
     
    const imageSrcUrl = imageSrc.url || "";
    return (
        <section className='weather' id="weather">
          <div className="weather_info">{weatherTemp}°F</div>
          <img src={imageSrcUrl} className="weather_image" />
        </section>
    )
}

 
    export default WeatherCard;
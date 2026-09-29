function WeatherCard({ weather }) {

  const iconUrl =
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={iconUrl}
        alt={weather.weather[0].description}
      />

      <h3>
        {Math.round(weather.main.temp)}°C
      </h3>

      <p className="weather-description">
        {weather.weather[0].description}
      </p>

      <p>
        Feels like{" "}
        {Math.round(
          weather.main.feels_like
        )}°C
      </p>

    </div>
  );
}

export default WeatherCard;
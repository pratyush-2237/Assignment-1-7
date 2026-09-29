import React from "react";

function WeatherCard({ weather }) {

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString();

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString();

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h3 className="temperature">
        {Math.round(weather.main.temp)}°C
      </h3>

      <p className="description">
        {weather.weather[0].description}
      </p>

      <div className="weather-details">

        <div className="detail">
          <h4>Humidity</h4>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="detail">
          <h4>Wind Speed</h4>
          <p>{weather.wind.speed} m/s</p>
        </div>

        <div className="detail">
          <h4>Sunrise</h4>
          <p>{sunrise}</p>
        </div>

        <div className="detail">
          <h4>Sunset</h4>
          <p>{sunset}</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;
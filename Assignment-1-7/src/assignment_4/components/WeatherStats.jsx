function WeatherStats({ weather }) {

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="weather-stats">

      <div className="stat-card">
        <h3>Humidity</h3>
        <p>
          {weather.main.humidity}%
        </p>
      </div>

      <div className="stat-card">
        <h3>Wind Speed</h3>
        <p>
          {weather.wind.speed} m/s
        </p>
      </div>

      <div className="stat-card">
        <h3>Sunrise</h3>
        <p>
          {sunrise}
        </p>
      </div>

      <div className="stat-card">
        <h3>Sunset</h3>
        <p>
          {sunset}
        </p>
      </div>

    </div>
  );
}

export default WeatherStats;
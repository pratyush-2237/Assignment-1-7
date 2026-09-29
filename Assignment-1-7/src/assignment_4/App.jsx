import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";

function App() {
  const [city, setCity] = useState("Kolkata");
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY =
    import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      if (!API_KEY) {
        throw new Error(
          "API key is missing"
        );
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            "City not found"
          );
        }

        if (response.status === 401) {
          throw new Error(
            "Invalid API key"
          );
        }

        throw new Error(
          "Unable to fetch weather data"
        );
      }

      const data = await response.json();

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchCity.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    setCity(searchCity.trim());
    setSearchCity("");
  };

  return (
    <div className="app">

      <div className="weather-container">

        <h1>
          Weather Dashboard
        </h1>

        <p className="subtitle">
          Check current weather information
        </p>

        <SearchBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={handleSearch}
        />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>
              Loading weather...
            </p>
          </div>
        )}

        {error && !loading && (
          <div className="error">
            {error}
          </div>
        )}

        {weather && !loading && !error && (
          <>
            <WeatherCard
              weather={weather}
            />

            <WeatherStats
              weather={weather}
            />
          </>
        )}

      </div>

    </div>
  );
}

export default App;
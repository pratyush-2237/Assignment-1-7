import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Put your OpenWeatherMap API key here
  const API_KEY = "YOUR_API_KEY";
   const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found.");
      }

      const data = await response.json();

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <Header />

      <main className="container">

        <SearchBar
          city={city}
          setCity={setCity}
          searchWeather={searchWeather}
        />

        {loading && (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading weather...</p>
          </div>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {weather && !loading && (
          <WeatherCard weather={weather} />
        )}

      </main>

      <Footer />

    </div>
  );
}

export default App;
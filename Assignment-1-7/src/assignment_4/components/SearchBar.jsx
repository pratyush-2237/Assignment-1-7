import React from "react";

function SearchBar({ city, setCity, searchWeather }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchWeather();
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>

    </form>
  );
}

export default SearchBar;
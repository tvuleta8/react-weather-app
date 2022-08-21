import React, { useState } from "react";
import "./Search.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "af1d49c44d7d38c5f24b52af719be555";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Enter a city"
          className="city-search"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="search-button" />
        <input
          type="submit"
          value="Use current location"
          className="location-button"
        />
      </form>
    </div>
  );
}

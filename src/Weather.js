import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Current from "./Current";
import Daily from "./Daily";
import Hourly from "./Hourly";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "af1d49c44d7d38c5f24b52af719be555";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Enter a city"
              className="city-search"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={handleCityChange}
              autoComplete="off"
            />
            <input type="submit" value="Search" className="search-button" />
            <input
              type="submit"
              value="Use current location"
              className="location-button"
            />
          </form>
        </div>
        <Current info={weatherData} />
        <hr />
        <h1 className="laterHeading">Today + Tomorrow</h1>
        <Hourly coordinates={weatherData.coordinates} />
        <hr />
        <h1 className="weekForecastHeading">This Week</h1>
        <Daily coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

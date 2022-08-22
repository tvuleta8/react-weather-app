import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Daily.css";
import axios from "axios";

export default function Daily(props) {
  function getForecast(coordinates) {
    let apiKey = "af1d49c44d7d38c5f24b52af719be555";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Daily">
      <div className="row">
        <div className="col">
          <div class="weekdays">Weekday</div>
          <div class="temp">
            <span class="maxTemp">maximum temp°</span> |{" "}
            <span class="minTemp">minimum temp°</span>
          </div>
          <div class="weatherIcon">
            <WeatherIcon code="01d" size={36} />
          </div>
          <div class="weatherName">description</div>
        </div>
      </div>
    </div>
  );
}

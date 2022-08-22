import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Daily.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Daily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Daily">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
            <WeatherForecastDay data={forecast[1]} />
            <WeatherForecastDay data={forecast[2]} />
            <WeatherForecastDay data={forecast[3]} />
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "af1d49c44d7d38c5f24b52af719be555";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

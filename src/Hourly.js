import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastHour from "./WeatherForecastHour";
import "./Hourly.css";

export default function Hourly(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Hourly">
        <div className="row">
          {forecast.map(function (hourlyForecast, index) {
            if (index % 4 == 0) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastHour data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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

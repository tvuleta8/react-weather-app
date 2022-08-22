import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 10000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div class="weekdays">{day()}</div>
      <div class="temp">
        <span class="maxTemp">{Math.round(props.data.temp.max)}°</span> |{" "}
        <span class="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
      <div class="weatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div class="weatherName text-capitalize">
        {props.data.weather[0].description}
      </div>
    </div>
  );
}

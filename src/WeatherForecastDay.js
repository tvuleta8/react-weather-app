import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weekdays">{day()}</div>
      <div className="temp">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span> |{" "}
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
      <div className="weatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="weatherName text-capitalize">
        {props.data.weather[0].description}
      </div>
    </div>
  );
}

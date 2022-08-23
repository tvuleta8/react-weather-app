import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function hour() {
    let hour = new Date(props.data.dt * 1000);
    let hours = hour.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return hours;
  }

  return (
    <div className="WeatherForecastHour">
      <span className="time">{hour()}h</span> <br />
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <br />
      {Math.round(props.data.temp)}°
    </div>
  );
}

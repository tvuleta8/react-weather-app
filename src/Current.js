import React from "react";
import "./Current.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Current(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-sm-6 now">
          <h1 className="selectedCity">{props.data.city}</h1>
          <h1>
            <WeatherIcon code="props.data.icon" alt={props.data.description} />
            <img src={props.data.icon} alt={props.data.description} id="icon" />
          </h1>
          <h1 className="degrees">{Math.round(props.data.temperature)}°C</h1>
          <h6 className="units">
            <a href="" id="units-celsius" className="active">
              °C
            </a>
            |
            <a href="" id="units-fahrenheit" className="">
              °F
            </a>
          </h6>
        </div>
        <div className="col-sm-6 now extraInfo">
          <h5 className="currentTime">
            <FormattedDate date={props.data.date} />
          </h5>
          <h5 className="weatherDescription text-capitalizer">
            {props.data.description}
          </h5>
          <h5 className="humidity">
            Humidity:{" "}
            <span className="humidityValue">{props.data.humidity}</span>%
          </h5>
          <h5 className="wind">
            Wind: <span className="windValue">{props.data.wind}</span> km/h
          </h5>
        </div>
      </div>
    </div>
  );
}

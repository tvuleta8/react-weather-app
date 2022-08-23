import React from "react";
import "./Current.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Current(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-sm-6 now">
          <h1 className="selectedCity">{props.info.city}</h1>
          <h1>
            <WeatherIcon
              code={props.info.icon}
              alt={props.info.description}
              size={65}
            />
          </h1>
          <WeatherTemperature celsius={props.info.temperature} />
        </div>
        <div className="col-sm-6 now extraInfo">
          <h5 className="currentTime">
            <FormattedDate date={props.info.date} />
          </h5>
          <h5 className="weatherDescription text-capitalize">
            {props.info.description}
          </h5>
          <h5 className="humidity">
            Humidity:{" "}
            <span className="humidityValue">{props.info.humidity}</span>%
          </h5>
          <h5 className="wind">
            Wind: <span className="windValue">{props.info.wind}</span> km/h
          </h5>
        </div>
      </div>
    </div>
  );
}

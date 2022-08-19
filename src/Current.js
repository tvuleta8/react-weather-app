import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="row">
      <div className="col-sm-6 now">
        <h1 className="selectedCity">Paris</h1>
        <h1>
          <img src="" alt="Clear" id="icon" />
        </h1>
        <h1 className="degrees">12°C</h1>
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
        <h5 className="currentTime">18:00</h5>
        <h5 className="weatherDescription">Cloudy</h5>
        <h5 className="humidity">
          Humidity: <span className="humidityValue">73</span>%
        </h5>
        <h5 className="wind">
          Wind: <span className="windValue">2.68</span> km/h
        </h5>
      </div>
    </div>
  );
}

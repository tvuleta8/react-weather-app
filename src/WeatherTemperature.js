import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="degrees">{Math.round(props.celsius)}°C</h1>
        <h6 className="units">
          °C |
          <a href="/" id="units-fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </h6>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h1 className="degrees">{Math.round(fahrenheit)}°C</h1>
        <h6 className="units">
          <a href="/" id="units-celsius" onClick={showCelsius}>
            °C
          </a>
          | °F
        </h6>
      </div>
    );
  }
}

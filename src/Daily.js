import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Daily.css";

export default function Daily() {
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

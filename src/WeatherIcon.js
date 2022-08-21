import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "CLEAR_DAY",
    "02n": "CLEAR_NIGHT",
    "03d": "CLEAR_DAY",
    "03n": "CLEAR_NIGHT",
    "04d": "CLEAR_DAY",
    "04n": "CLEAR_NIGHT",
    "05d": "CLEAR_DAY",
    "05n": "CLEAR_NIGHT",
    "06d": "CLEAR_DAY",
    "07n": "CLEAR_NIGHT",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#464646"
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}

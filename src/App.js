import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <footer className="sourceCode">
        <a href="https://github.com/tvuleta8/react-weather-app" target="_blank">
          Source Code
        </a>
      </footer>
    </div>
  );
}

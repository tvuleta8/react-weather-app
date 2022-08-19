import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App";
import Search from "./Search";
import Current from "./Current";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Search />
      <hr />
      <Current />
    </div>
    <div class="sourceCode">
      <a href="https://github.com/tvuleta8/react-weather-app" target="_blank">
        Source Code
      </a>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

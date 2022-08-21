import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer className="sourceCode">
          <a
            href="https://github.com/tvuleta8/react-weather-app"
            target="_blank"
          >
            Source Code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

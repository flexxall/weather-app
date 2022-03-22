import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import Location from "./components/Location/Location";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flexxall's Weather App</h1>
        <Location />
      </header>
      <main>
        <Forecast />
      </main>
      <footer>Page created by Steve Fisher</footer>
    </div>
  );
}

export default App;

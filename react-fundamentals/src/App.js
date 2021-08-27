import React from "react";
import "./App.css";
import Geolocation from "./Fetches/Geolocation";
import Weather from "./Fetches/Weather";
import Header from "./Components/Header";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Geolocation />
      <Weather />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Geolocation from "./Fetches/Geolocation";
import Weather from "./Fetches/Weather";
// import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Geolocation />
      <Weather />
    </div>
  );
}

export default App;

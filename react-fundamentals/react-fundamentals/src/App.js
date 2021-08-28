import React from "react";
import "./App.css";
import Geolocation from "./Fetches/Geolocation";
import Weather from "./Fetches/Weather";
import Header from "./Components/Header";
import Home from "./Components/Home";
import TicketMaster from "./Fetches/TicketMaster";
import Footer from "./Components/Footer";
import Nasa from "./Fetches/Nasa";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Geolocation />
      <Nasa />
      <Weather />
      <TicketMaster />
      <Footer />
    </div>
  );
}

export default App;

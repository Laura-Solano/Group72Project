import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FetchIndex from "./Fetches/FetchIndex";
import Footer from "./Components/Footer";

function App() {
  return <div className="App">
    <FetchIndex/>
    <Footer/>
  </div>;
  
}

export default App;

import React, { useState, useEffect } from "react";
import Geolocation from "./Geolocation";
function Weather() {
  const [lat, SetLat] = useState([]);
  const [lng, SetLng] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        SetLat(position.coords.latitude);
        SetLng(position.coords.longitude);
      });

      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=0a52bd5310c6ae1241924c7d907e16f4`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    getData();
  }, [lat, lng]);

  return (
    <div className="weather">
      <h2>Today's Weather Spirit is:</h2>
      {data.main ? (
        <div>
          <p>{data.main.temp}</p>
          <p>{data.weather[0].main}</p>
        </div>
      ) : (
        <p>Not in the start today</p>
      )}
    </div>
  );
}
export default Weather;

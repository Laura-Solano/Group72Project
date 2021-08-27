import React, { useState } from "react";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("The Crystal ball has a crack");
    } else {
      setStatus("Reading the Stars...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("The alignment of the stars are not for you");
        }
      );
    }
  };

  return (
    <div className="location">
      <button onClick={getLocation}>Look into the Crystal Ball</button>
      <p>{status}</p>
      <h2>Your earthbound presence is found:</h2>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
};

export default App;

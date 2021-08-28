import React, { useState, useEffect } from "react";
import moment from "moment";
const Nasa = (props) => {
  let date = moment().subtract(3, "days").date();
  let month = moment().add(1, "months").month();
  let year = moment().year();
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      await fetch(
        `http://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${year}-${month}-${date}&api_key=aQ9KhcBPKDLzXmSYJu8UV7whEL5PHvofMqYcOhU1`
      )
        .then((res) => res.json())
        .then((result) => {
          // setData(result.url);
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div>
      {data ? (
        <div>
          <img className="photo" src={data.url} alt="Geographic picture" />{" "}
        </div>
      ) : (
        <p>Your earthly presence is lost in the mists</p>
      )}
      <p>
        Image Date: {month}/{date}/{year}
      </p>
    </div>
  );
};
export default Nasa;

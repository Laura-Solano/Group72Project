import React, { useState, useEffect } from 'react';
import moment from 'moment'

const Nasa = (props) => {
    // const [data, setData] = useState("");
    // const apiUrl = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=aQ9KhcBPKDLzXmSYJu8UV7whEL5PHvofMqYcOhU1"
    let date = moment().date()
    let month = moment().month()
    let year = moment().year()

    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${year}-${month}-${date}&api_key=aQ9KhcBPKDLzXmSYJu8UV7whEL5PHvofMqYcOhU1`)
      .then(res => res)
      .then(result => {
        setData(result.url)
        console.log(result);
      });
    }
    fetchData();
  }, [lat, lon])

    // useEffect(() => {
    //     fetch(apiUrl)
    //         .then((res) => res)
    //         .then((json) => setData(json.url))
    // }, []);

   
return(
    <div>
        <img className="photo" src={data} alt=""/>
        <p>Date: {date}/{month}/{year}</p>
    </div>
)};

export default Nasa;

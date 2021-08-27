import React, { useState, useEffect } from 'react';

const Nasa = (props) => {
    const [data, setData] = useState("");
    const apiUrl = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=aQ9KhcBPKDLzXmSYJu8UV7whEL5PHvofMqYcOhU1"

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res)
            .then((json) => setData(json.url))
    }, []);

  //  console.log(data);

  const dateFunction = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Decemeber",
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };

return(
    <div>
        <img className="photo" src={data}/>
    </div>
)};

export default Nasa;

import React, { useState, useEffect } from 'react';
import Geolocation from './Geolocation'

function TicketMaster () {
    const [lat, SetLat] = useState([]);
    const [lng, SetLng] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      const getData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
          SetLat(position.coords.latitude);
          SetLng(position.coords.longitude);
        });

        await fetch (
            `https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${lat},${lng}&apikey=bi2M5AwJqAik73OnkxurIv7AjlHhlAdU` 
              
       )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
          });
      };
      getData();
    }, [lat, lng]);

//longlat hardcoded - need to update
// const TicketMaster = () => {
//     const [userData, setData] = useState({});
//     const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=39.89,-86.22&apikey=bi2M5AwJqAik73OnkxurIv7AjlHhlAdU",



return (
    <div className="ticket">
    <h2>Events Near You:</h2>
    {data._embedded ? (
        <div>
    <p>{data._embedded.events[0].name}</p>
    <p>{data._embedded.events[1].name}</p>
    <p>{data._embedded.events[2].name}</p>
    <p>{data._embedded.events[3].name}</p>
    <p>{data._embedded.events[4].name}</p>   
    </div>
    ) : (
       <p>End of Events</p>
    )}
    </div>
);
}
export default TicketMaster;
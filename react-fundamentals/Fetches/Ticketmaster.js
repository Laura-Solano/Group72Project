import React from 'react';

//longlat hardcoded - need to update
const Ticketmaster = (props) => {
    const [data, setData] = useState("");
    const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=39.89,-86.22&apikey=bi2M5AwJqAik73OnkxurIv7AjlHhlAdU"

export default Ticketmaster;
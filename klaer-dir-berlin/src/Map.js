import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const [markerList, setMarkerList] = useState([]);
  const berlinPosition = [52.5200, 13.4050];

  useEffect(() => {
    // Call the fetchData function when the component mounts
    fetchData();
    // Set an interval to call the fetchData function every 10 seconds
    const intervalId = setInterval(fetchData, 10000);
    // Return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  // Define the fetchData function
  const fetchData = () => {
    fetch("http://localhost:3001/susLocs/")
      .then(response => response.json())
      .then(data => setMarkerList(data.data))
      .catch(error => console.log(error));
  };

  return (
    <MapContainer center={berlinPosition} zoom={10} style={{ height: "300px", width: "750px"}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markerList.map((location) => (
        <Marker key={location.id} position={[location.lat, location.long]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;




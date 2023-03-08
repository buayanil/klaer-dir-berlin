import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({locations}) {
  const berlinPosition = [52.5200, 13.4050];

  return (
    <MapContainer center={berlinPosition} zoom={10} style={{ height: "300px", width: "750px"}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location) => (
        <Marker key={location.id} position={[location.lat, location.long]}>
          <Popup>
            <div>
              <h3>{location.name}</h3>
              <p>{location.adresse}</p>
              <p>{location.plz} {location.stadt}</p>
            </div>
          </Popup>

        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;




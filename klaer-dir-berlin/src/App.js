import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import Login from './Login';
import Logout from './Logout';
import AddButton from './AddButton';
import { handleLocationClick } from './HandleLocationClick';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Call the fetchData function when the component mounts
    fetchData();
    // Set an interval to call the fetchData function every 10 seconds
    const intervalId = setInterval(fetchData, 10000);
    // Return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/susLocs/")
      .then(response => response.json())
      .then(data => setLocations(data.data))
      .catch(error => console.log(error));
  };

  const handleLoginSuccess = (username) => {
    if (username === 'admina') {
      setIsAdmin((current) => !current);
    }
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <div className="flex-container">
        <div className="small-div" id="Web-Name">
          Klär dir Berlin, die Seite für das beste Wasser
        </div>
        <div className="small-div" id="LoginScreen">
          <Login onLoginSuccess={handleLoginSuccess} />
          <div className="footer loginFooter" id="loginFooter"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-container">
      <div className="small-div" id="Web-Name">
        Klär dir Berlin, die Seite für das beste Wasser
        <Logout onLogout={handleLogout} />
      </div>
  
      <div className="small-div" id="MainScreen">
        <div id="Liste">
          {locations.map(location => (
            <div
              key={location._id}
              id={location._id}
              onClick={() => handleLocationClick(location)}
            >
              {location.name}
            </div>
          ))}
        </div>
        <div id="main-container">
          <div id="map-container">
            <Map />
          </div>
        </div>
      </div>
  
      <div id="add-container" className='small-div'>
        {isAdmin && <AddButton />}
      </div>
  
      <div className="small-div" id="UpdateScreen">
        <form id="UpdateForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="upname" name="name" />
          <br />
          <label htmlFor="ID">ID:</label>
          <input type="text" id="upID" name="id" />
          <br />
          <label htmlFor="Adresse">Adresse:</label>
          <input type="text" id="upAdresse" name="Adresse" />
          <br />
          <label htmlFor="PLZ">PLZ:</label>
          <input type="text" id="upPLZ" name="Adresse" />
          <br />
          <label htmlFor="Stadt">Stadt:</label>
          <input type="text" id="upStadt" name="Stadt" />
          <br />
          <label htmlFor="Lat">Lat:</label>
          <input type="text" id="upLat" name="Lat" />
          <br />
          <label htmlFor="Long">Long:</label>
          <input type="text" id="upLong" name="Long" />
          <br />
          {isAdmin && <button id="UpdateButton">Update</button>}
          {isAdmin && <button id="DeleteButton">Delete</button>}
        </form>
      </div>
    </div>
  );
  
}

export default App;



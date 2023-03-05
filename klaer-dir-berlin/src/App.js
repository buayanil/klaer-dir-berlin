import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Login from './Login';
import Logout from './Logout';
import AddButton from './AddButton';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
      </div>

      <div className="small-div" id="MainScreen">
        <p id="WilkommenNachricht">Wilkommen!</p>
        <div id="Liste" className="box"></div>
        <div id="main-container">
          <div id="map-container">
            <Map />
          </div>
          <Logout onLogout={handleLogout} />
        </div>
        <div className="footerbar box" id="mainFooter"></div>
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



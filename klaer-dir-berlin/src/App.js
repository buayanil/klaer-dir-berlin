import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import Login from './Login';
import Logout from './Logout';
import AddButton from './AddButton';
import Footer from "./Footer";
import { handleLocationClick } from './HandleLocationClick';
import {handleDelete} from './HandleLocationClick';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [locations, setLocations] = useState([]);
  const [showUpdateScreen, setShowUpdateScreen] = useState(false)
  const [updateForm, setUpdateForm] = useState({});

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

  function handleCancel() {
    setShowUpdateScreen(false);
  }

  function handleUpdate(event) {
    event.preventDefault();
    console.log(updateForm)
    putData("http://localhost:3001/susLocs/"+updateForm._id,
      {name:updateForm.name, id:updateForm.id, adresse:updateForm.adresse,
         plz:updateForm.plz, stadt:updateForm.stadt, lat:updateForm.lat, long:updateForm.long})
      
  }

  async function putData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  }


  if (!loggedIn) {
    return (
      <div className="flex-container">
        <div className="small-div" id="Web-Name">
          Klär dir Berlin, die Seite für das beste Wasser
        </div>
        <div className="small-div" id="LoginScreen">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
        <Footer />
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
              onClick={() => {
                handleLocationClick(location);
                setShowUpdateScreen(true);
                setUpdateForm(location);
              }}
              
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
      
      {showUpdateScreen && (        
        <div className="small-div" id="UpdateScreen">
          <form id="UpdateForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="upname" name="name" value={updateForm.name} onChange={(e) => setUpdateForm({...updateForm, name: e.target.value})} />
            <br />
            <label htmlFor="ID">ID:</label>
            <input type="text" id="upID" name="id" value={updateForm.id} onChange={(e) => setUpdateForm({...updateForm, id: e.target.value})}/>
            <br />
            <label htmlFor="Adresse">Adresse:</label>
            <input type="text" id="upAdresse" name="Adresse" value={updateForm.adresse} onChange={(e) => setUpdateForm({...updateForm, adresse: e.target.value})}/>
            <br />
            <label htmlFor="PLZ">PLZ:</label>
            <input type="text" id="upPLZ" name="Adresse" value={updateForm.plz} onChange={(e) => setUpdateForm({...updateForm, plz: e.target.value})}/>
            <br />
            <label htmlFor="Stadt">Stadt:</label>
            <input type="text" id="upStadt" name="Stadt" value={updateForm.stadt} onChange={(e) => setUpdateForm({...updateForm, stadt: e.target.value})}/>
            <br />
            <label htmlFor="Lat">Lat:</label>
            <input type="text" id="upLat" name="Lat" value={updateForm.lat} onChange={(e) => setUpdateForm({...updateForm, lat: e.target.value})}/>
            <br />
            <label htmlFor="Long">Long:</label>
            <input type="text" id="upLong" name="Long" value={updateForm.long} onChange={(e) => setUpdateForm({...updateForm, long: e.target.value})}/>
            <br />
            {isAdmin && <button id="UpdateButton" onClick={handleUpdate}>Update</button>}
            {isAdmin && <button id="DeleteButton" onClick={handleDelete}>Delete</button>}
            <button onClick={handleCancel}>Cancel</button>
          </form>

        </div>
      )}
      <Footer />
    </div>
  );
  
}

export default App;



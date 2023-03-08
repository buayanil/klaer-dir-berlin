import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';
import Login from './Login';
import Logout from './Logout';
import AddButton from './AddButton';
import Footer from "./Footer";
import {fetchData, deleteData, putData} from './API'



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [locations, setLocations] = useState([]);
  const [showUpdateScreen, setShowUpdateScreen] = useState(false)
  const [updateForm, setUpdateForm] = useState({});

  useEffect(() => {
    // Call the fetchData function when the component mounts
    
    async function getData(){
      var fromAPI = await fetchData("http://localhost:3001/susLocs/");
      setLocations(fromAPI)
    }
    getData()
  }, []);


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

  async function handleUpdate(event) {
    event.preventDefault();
    setShowUpdateScreen(false)
    const newLocation = {
      name:updateForm.name,
      id:updateForm.id, 
      adresse:updateForm.adresse,
      plz:updateForm.plz, 
      stadt:updateForm.stadt, 
      lat:updateForm.lat, 
      long:updateForm.long
    }
    const response = await putData("http://localhost:3001/susLocs/"+updateForm._id, newLocation)
    if(response.ok){
      var fromAPI = await fetchData("http://localhost:3001/susLocs/");
      setLocations(fromAPI)
    }   
  }

  async function handleDelete(event){
    event.preventDefault();
    setShowUpdateScreen(false)
    const response = await deleteData("http://localhost:3001/susLocs/", updateForm._id)
    if(response.ok){
      var fromAPI = await fetchData("http://localhost:3001/susLocs/");
      setLocations(fromAPI)
    }
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
          {locations?.map(location => (
            <div
              key={location._id}
              id={location._id}
              onClick={() => {
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
            <Map locations={locations}/>
          </div>
        </div>
      </div>
  
      <div id="add-container" className='small-div'>
        {isAdmin && <AddButton setLocations={setLocations}/>}
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



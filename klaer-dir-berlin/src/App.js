import React from "react";
import "./App.css";
import Map from "./Map";

function App() {
  return (
    <div className="flex-container">
      <div className="small-div" id="Web-Name">
        Klär dir Berlin, die Seite für das beste Wasser
      </div>
      <div className="small-div" id="LoginScreen">
        <form id="login-form" className="row">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <input type="submit" id="login-form-submit" className="button" />
        </form>
        <div className="footer loginFooter" id="loginFooter"></div>
      </div>

    <div className="small-div" id="MainScreen">
      <p id="WilkommenNachricht">Wilkommen!</p>
      <div id="Liste" className="box"></div>
      <div>
        <button id="AddButton">Add</button>
        <button id="LogoutButton">Logout</button>
      </div>
      <div id="map" className="box"><Map /></div>
      <div className="footerbar box" id="mainFooter"></div>
    </div>

      <div className="small-div"><div id="AddScreen" class="row">
  <form id="AddForm" class="box">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"/>
    <br/>
    <label for="ID">ID:</label>
    <input type="text" id="ID" name="id"/>
    <br/>
    <label for="Adresse">Adresse:</label>
    <input type="text" id="Adresse" name="Adresse"/>
    <br/>
    <label for="PLZ">PLZ:</label>
    <input type="text" id="PLZ" name="Adresse"/>
    <br/>
    <label for="Stadt">Stadt:</label>
    <input type="text" id="Stadt" name="Stadt"/>
    <br/>
    <label for="Lat">Lat:</label>
    <input type="text" id="Lat" name="Lat"/>
    <br/>
    <label for="Long">Long:</label>
    <input type="Long" id="Long" name="Long"/>
    <br/>
    <button id="Save">Save</button>
  </form>
    </div>
  </div>
    
  <div className="small-div" id="UpdateScreen">
    <form id="UpdateForm" class="box">
      <label for="name">Name:</label>
      <input type="text" id="upname" name="name"/>
      <br/>
      <label for="ID">ID:</label>
      <input type="text" id="upID" name="id"/>
      <br/>
      <label for="Adresse">Adresse:</label>
      <input type="text" id="upAdresse" name="Adresse"/>
      <br/>
      <label for="PLZ">PLZ:</label>
      <input type="text" id="upPLZ" name="Adresse"/>
      <br/>
      <label for="Stadt">Stadt:</label>
      <input type="text" id="upStadt" name="Stadt"/>
      <br/>
      <label for="Lat">Lat:</label>
      <input type="text" id="upLat" name="Lat"/>
      <br/>
      <label for="Long">Long:</label>
      <input type="Long" id="upLong" name="Long"/>
      <br/>
      <button id="UpdateButton">Update</button>
      <button id="DeleteButton">Delete</button>
    </form>
  </div>
  
</div>
  );
}

export default App;


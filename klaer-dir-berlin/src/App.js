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

      <div className="small-div"><Map /></div>
      <div className="small-div">Div 3</div>
      <div className="small-div">Div 4</div>
    </div>
  );
}

export default App;


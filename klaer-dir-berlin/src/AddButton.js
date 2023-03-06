import React, { useState } from 'react';
import { onSave } from './HandleSaveClick';

function AddButton(props) {
  const [showAddScreen, setShowAddScreen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    adresse: '',
    plz: '',
    stadt: '',
    lat: '',
    long: '',
  });

  const handleAddClick = () => {
    setShowAddScreen(true);
  }

  const handleSaveClick = () => {
    setShowAddScreen(false);
    onSave(formData);
  }

  const handleCancelClick = () => {
    setShowAddScreen(false);
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      {showAddScreen ? (
        <div id="AddScreen">
          <form id="AddForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="adresse">Adresse:</label>
            <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="plz">PLZ:</label>
            <input type="text" id="plz" name="plz" value={formData.plz} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="stadt">Stadt:</label>
            <input type="text" id="stadt" name="stadt" value={formData.stadt} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="lat">Lat:</label>
            <input type="text" id="lat" name="lat" value={formData.lat} onChange={handleFormChange}/>
            <br/>
            <label htmlFor="long">Long:</label>
            <input type="text" id="long" name="long" value={formData.long} onChange={handleFormChange}/>
            <br/>
            <button id="SaveButton" onClick={handleSaveClick}>Save</button>
            <button id="CancelButton" onClick={handleCancelClick}>Cancel</button>
          </form>
        </div>
      ) : (
        <button id="AddButton" onClick={handleAddClick}>Add</button>
      )}
    </div>
  );
}

export default AddButton;


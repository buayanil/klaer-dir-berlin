import React, { useState } from 'react';

function AddButton(props) {
  const [showAddScreen, setShowAddScreen] = useState(false);

  const handleAddClick = () => {
    setShowAddScreen(true);
  }

  const handleSaveClick = () => {
    setShowAddScreen(false);
    // call the props.onSave function here
  }

  const handleCancelClick = () => {
    setShowAddScreen(false);
  }

  return (
    <div>
      {showAddScreen ? (
        <div id="AddScreen">
          <form id="AddForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
            <br/>
            <label htmlFor="ID">ID:</label>
            <input type="text" id="ID" name="id"/>
            <br/>
            <label htmlFor="Adresse">Adresse:</label>
            <input type="text" id="Adresse" name="Adresse"/>
            <br/>
            <label htmlFor="PLZ">PLZ:</label>
            <input type="text" id="PLZ" name="Adresse"/>
            <br/>
            <label htmlFor="Stadt">Stadt:</label>
            <input type="text" id="Stadt" name="Stadt"/>
            <br/>
            <label htmlFor="Lat">Lat:</label>
            <input type="text" id="Lat" name="Lat"/>
            <br/>
            <label htmlFor="Long">Long:</label>
            <input type="text" id="Long" name="Long"/>
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

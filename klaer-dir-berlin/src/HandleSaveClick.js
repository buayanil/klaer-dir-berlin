import React, { useState } from 'react';

// onSave.js

export const onSave = async (formData) => {
  try {
    const response = await fetch('http://localhost:3001/susLocs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    console.log('Data saved:', data);
    // do something with the response data if needed
  } catch (error) {
    console.error('Error while saving data:', error);
    // handle error if needed
  }
}


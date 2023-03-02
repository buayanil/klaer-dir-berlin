const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
  id: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true
  },
  plz: {
    type: String,
    required: true
  },
  stadt: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Location', locationSchema);
const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
  name: String,
  climate: String,
  films: [],
  gravity: String,
  population: String
})

module.exports = mongoose.model('Planets', planetsSchema)
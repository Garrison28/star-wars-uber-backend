const mongoose = require('mongoose'):

const peopleSchema = new mongoose.Schema({
  name: String,
  gender: String,
  starships: [],
  rating: String
})

module.exports = mongoose.model('People', peopleSchema)
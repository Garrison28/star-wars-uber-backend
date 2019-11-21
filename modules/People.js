const mongoose = require('mongoose'):

const peopleSchema = new mongoose.Schema({
  name: String,
  gender: String,
  starships: [],
})

module.exports = mongoose.model('People', peopleSchema):
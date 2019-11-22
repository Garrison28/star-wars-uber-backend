const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: String,
  gender: String,
  starships: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StarShips'
  },
  rating: Number,
  films: []
})

module.exports = mongoose.model('People', peopleSchema)
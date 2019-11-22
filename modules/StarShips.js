const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  name: String,
  model: String,
  hyperdrive_rating: String,
})

module.exports = mongoose.model('Starships', starshipSchema)
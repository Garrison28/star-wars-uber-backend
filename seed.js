require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const People = require('./modules/People');
const StarShips = require('./modules/StarShips');


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});



let peopleSeeder = () => {
  axios.get('https://swapi.co/api/people/?page=9')
    .then((response) => {
        response.data.results.forEach((person) => {
          console.log(person);
          if (person.starships.length > 0) {
            axios.get(person.starships[0])
              .then((response) => {
                StarShips.create({
                  name: response.data.name,
                  model: response.data.model,
                  hyperdrive_rating: response.data.hyperdrive_rating,
                })
                  .then((starship) => {
                    People.create({
                      name: person.name,
                      gender: person.gender,
                      starships: starship._id,
                      rating: person.rating
                    })
                    .then(
                      console.log('SUCCESSFULLY CREATED!!!!!')
                    )
                  })
              })
          }
        })
    })
  
  
}

peopleSeeder();
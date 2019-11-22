require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Planet = require('./modules/planets')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

let planetSeeder = () => {
  axios.get('https://swapi.co/api/planets/?page=7')
    .then((response) => {
      response.data.results.forEach((planet) => {
        console.log(planet)
        if (planet.films.length > 0) {
          Planet.create({
            name: planet.name,
            climate: planet.climate,
            films: [],
            gravity: planet.gravity,
            population: planet.population
          })
            .then(
              console.log('SUCCESSFULLY CREATED!!!')
            )
        } else {
          Planet.create({
            name: planet.name,
            climate: planet.climate,
            films: [],
            gravity: planet.gravity,
            population: planet.population
          })
          .then(
            console.log('SUCCESSFULY CREATED OTHER STUFF')
          )
        }
      })
    })
}

planetSeeder();
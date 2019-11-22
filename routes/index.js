const express = require('express');
const router = express.Router();
const People = require('../modules/people');
const StarShips = require('../modules/starships');
const Planets = require('../modules/planets');

router.get('/people', (req, res) => {
  People.find({}, (err, people) => {
    res.json(people);
    console.log('FOUND THE PEOPLE!')
  })
})

router.get('/people/:id', (req, res) => {
  People.findById(req.params.id, (err, person) => {
    res.json(person);
    console.log("FOUND THE PERSON!")
  })
})

router.put('/people/:id', (req, res) => {
  People.findById(req.params.id, (err, people) => {
    people.update(req.body, (err, people) => {
      res.json(people);
      console.log('PERSON UPDATED!')
    })
  })
})

router.get('/starships', (req, res) => {
  StarShips.find({}, (err, starships) => {
    res.json(starships);
    console.log('FOUND THE STARSHIPS!')
  })
})

router.get('/starships/:id', (req, res) => {
  StarShips.findById(req.params.id, (err, starship) => {
    res.json(starship)
    console.log('FOUND A SHIP!')
  })
})

router.get('/planets', (req, res) => {
  Planets.find({}, (err, planets) => {
    res.json(planets)
    console.log('FOUND ME A PLANET')
  })
})

router.get('/planets/:id', (req, res) => {
  Planets.findById(req.params.id, (err, planet) => {
    res.json(planet)
    console.log('FOUND ME A SPECIFIC PLANET')
  })
})

module.exports = router;
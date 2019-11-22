const express = require('express');
const router = express.Router();
const People = require('../modules/people');
const StarShips = require('../modules/starships');

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
  StarShips.findById(req.params.id, (err, starships) => {
    res.json(starships)
    console.log('FOUND A SHIP!')
  })
})

router

module.exports = router;
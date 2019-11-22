require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const People = require('../modules/people');
// const StarShips = require('../modules/starships');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

app.use('/', require('./routes/index'));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
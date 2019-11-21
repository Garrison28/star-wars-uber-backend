require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} for life!!`);
});
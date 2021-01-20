const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const port = 3000;

const route = require('./routes/route');

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database @ 27017');
});

//
mongoose.connection.on('erroe', (err) => {
  if (err) {
    console.log('Error in database connection', err);
  }
});

// middleware - cors
app.use(cors());

// middleware - bodyparser
app.use(bodyparser.json());

// setting up routes
app.use('/api/v1', route);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// testing server
app.get('/', (req, res) => {
  res.send('foobar');
});

app.listen(port, () => {
  console.log('Server started at port:', port);
});

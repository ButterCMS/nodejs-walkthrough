'use strict';

const express = require('express');
const app = express();
const butter = require('buttercms')('');

app.use(express.static('public'))
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/l/lakeview', function(req, res) {
  res.render('lakeview')
});

// Start server
app.listen(process.env.PORT || 3000)
'use strict';

const express = require('express');
const app = express();
const butter = require('buttercms')('9515f791d07fc20b13beb09816c578a46312835d');

app.use(express.static('public'))
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
  butter.content.retrieve(['homepage_headline']).then(function(resp) {
    var content = resp.data.data;

  	res.render('home', {
  		content: content
	});
  });
});

app.get('/l/lakeview', function(req, res) {
  res.render('lakeview')
});

// Start server
app.listen(process.env.PORT || 3000)
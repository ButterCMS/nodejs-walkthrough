'use strict';

const express = require('express');
const app = express();
const butter = require('buttercms')('9515f791d07fc20b13beb09816c578a46312835d');

app.use(express.static('public'))
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
  butter.content.retrieve(['homepage_headline', 'locations']).then(function(resp) {
    var content = resp.data.data;

  	res.render('home', {
  		content: content
	});
  });
});

app.get('/l/:slug', function(req, res) {
  var slug = req.params.slug;

  butter.content.retrieve(['locations[slug='+slug+']']).then(function(resp) {
    // 'locations' is a collection so we access the first and only item
    var content = resp.data.data.locations[0];

    res.render('location', {
      content: content
    })
  });
});

// Start server
app.listen(process.env.PORT || 3000)
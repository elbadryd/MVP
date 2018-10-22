var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var request = require('request');


var app = express();


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));


//get db data for reviews
app.get('/reviews', function (req, res) {
  reviews.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  });
});


//make api call for breweries 
app.get('/breweries', function (req, res){
    const options = {
      url: 'https://api.openbrewerydb.org/breweries',
      city: req.body.city,
      state: req.body.state,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
      },
  }
  request(options, function (err, res, body) {
    if (err) {
      console.log('error reaching brew api')
    } else {
      //may need callback
     res.send(body);
    }
  })
})
let port = 3000;
app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3000!');
});


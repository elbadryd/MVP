var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var request = require('request');
var db = require('./db/database.js')


var app = express();


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

//post review to db

app.post('/reviews', function(req, res){
    var queryString = 'insert into reviews(id, guest, brewery, review) values (?, ?, ?, ?)';
    var queryArgs = [null, req.query.guest, req.query.brewery, req.query.review];
    db.connection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        console.log('error posting review');
        res.status(404)
      } else {
      res.status(301);
      console.log('review posted successfully')
      }
    });  
})

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
app.get('/breweries',function (req, res){
  const options = {
    url: 'https://api.openbrewerydb.org/breweries',
    qs: {
      //will need to change, works on postman for now
      by_city: req.query.by_city,
      // by_state: req.body.by_state,
    }, method: 'GET',
    headers: {
      'User-Agent': 'request',
    },
  }

  const callback = (error, body) => {
    if (error) {
      res.status(404);
    }
    console.log('got body, server');
    res.status(200).send(body);
  }
  request(options, callback);
})

// app.get('/', function(request, response){
//   db query for most recent reviews
// })
let port = 3000;
app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3000!');
});


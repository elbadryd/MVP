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
app.get('/breweries',function (req, res){
  const options = {
    url: 'https://api.openbrewerydb.org/breweries',
    qs: {
      //will need to change, works on postman for now
      by_city: req.query.by_city,
      by_state: req.query.by_state,
    }, method: 'GET',
    headers: {
      'User-Agent': 'request',
    },
  }

  const callback = (error, body) => {
    if (error) {
      res.status(404);
    }
    console.log(body);
    res.status(200).send(body);
  }
  request(options, callback);
})

// app.get('/', function(request, response){
//   response.render('angular-client/index.html')
// })
let port = 3000;
app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3000!');
});


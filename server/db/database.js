var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'brewery'
});


connection.connect(function (err) {
  if (err) {
    console.log('db connection error');
  } 
  else {
  //   connection.query('SELECT * FROM reviews', function(err, results, fields) {
  //   if (err) {
  //     console.log('db err')
  //   } else {
  //     console.log(results)
  //   }
  // });
  console.log('Connected');
  }
});

module.exports = connection
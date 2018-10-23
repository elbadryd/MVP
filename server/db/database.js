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
  } else {
  console.log('Connected');
  }
});

module.exports = connection
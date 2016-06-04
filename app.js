var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'm0bpr0gr@'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...');
});
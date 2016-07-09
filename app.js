var express = require('express');
var mysql = require('mysql');

var app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'password123',
//     database: 'chars_recipes'
// });

// connection.connect(function (err) {
//     if (err) throw err
//     console.log('You are now connected...');
// });

// connection.query('CREATE DATABASE IF NOT EXISTS chars_recipes', function (err) {
//     if (err) throw err;
//     connection.query('USE chars_recipes', function (err) {
//         if (err) throw err;
//         connection.query('CREATE TABLE IF NOT EXISTS recipe_info('
//             + 'recipe_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,'
//             + 'title varchar(255),'
//             + 'description text'
//             + ')', function (err) {
//                 if (err) throw err;
//             });
//     });
// });

app.get('/', function (req, res) {

    res.render('index');



    // connection.query('SELECT * FROM chars_recipes.recipe_info', function (err, rows) {
    //     if (err) throw err;

    //     res.send(rows);
    // });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



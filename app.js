var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password123',
    database: 'chars_recipes'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...');
});

connection.query('CREATE DATABASE IF NOT EXISTS chars_recipes', function (err) {
    if (err) throw err;
    connection.query('USE chars_recipes', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS recipe_info('
            + 'recipe_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,'
            + 'title varchar(255),'
            + 'description text'
            + ')', function (err) {
                if (err) throw err;
            });
    });
});



// app.post('/recipe_info', function (req, res) {
//     connection.query('INSERT INTO recipe_info VALUES (?, ?)', req.body,
//         function (err, result) {
//             if (err) throw err;
//             res.send('Recipe added to databse with ID: ' + result.insertId);
//         }
//     );
// });

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

app.get('/', function (req, res) {

    connection.query('SELECT * FROM chars_recipes.recipe_info', function (err, rows) {
        if (err) throw err;

        console.log('Data received from Db:\n');
        res.send(rows);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// connection.query('CREATE table recipe_info(recipe_id int NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(255), description text)', function (err, result) {
//     if (err) throw err
//     connection.query('INSERT into recipe_info(title, description) VALUES (?, ?)', ['Easy Baked Jalapeño Cheese Crisps', 'It is basically a jalapeño popper in the form of a crisp'], function (err, result) {
//         if (err) throw err
//         connection.query('SELECT * FROM recipe_info', function (err, results) {
//             if (err) throw err
//             console.log(results[0].recipe_id);
//             console.log(results[0].title);
//             console.log(results[0].description);
//         });
//     });
// });


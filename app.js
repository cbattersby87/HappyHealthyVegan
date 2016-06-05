var mysql = require('mysql');

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

connection.query('CREATE table recipe_info(recipe_id int NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(255), description text)', function (err, result) {
    if (err) throw err
    connection.query('INSERT into recipe_info(title, description) VALUES (?, ?)', ['Easy Baked Jalapeño Cheese Crisps', 'It is basically a jalapeño popper in the form of a crisp'], function (err, result) {
        if (err) throw err
        connection.query('SELECT * FROM recipe_info', function (err, results) {
            if (err) throw err
            console.log(results[0].recipe_id);
            console.log(results[0].title);
            console.log(results[0].description);
        });
    });
});
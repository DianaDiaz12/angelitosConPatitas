const express = require('express');
const app = express();
const mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'acp'
});

connect.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Conectado')
    }
});

app.get('/', function (req, resp) {

    connect.query('SELECT * FROM products', function (error, rows, fields) {
        if (!!error) {
            console.log('Error');
        } else {
            console.log('Trae datos')
            console.log(rows);
        }
    }
    );
});
app.listen(1405);


const mysql = require('mysql2');

//connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        //your mysql password
        password: 'Miso',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
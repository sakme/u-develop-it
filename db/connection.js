const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Akme@9d9d',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`select * from candidates`, (err, rows) => {
    console.log(rows);
});

// 404 error
app.use((req, res) => {
    res.status(404).end();
})

// listener
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
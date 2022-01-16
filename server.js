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

// // get all candidates
// db.query(`select * from candidates`, (err, rows) => {
//     console.log(rows);
// });

// // get a single candidate
// db.query(`select * from candidates where id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// // delete a candidate
// db.query(`delete from candidates where id = ?`, 1, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// // create a candidate
// const sql = `insert into candidates (id, first_name, last_name, industry_connected)
//                 values (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// 404 error
app.use((req, res) => {
    res.status(404).end();
})

// listener
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
import express from "express";
import 'dotenv/config';
import mysql from 'mysql';

const app = express();

/*
    Connecting app to the DATABASE.
*/

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {}
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});


app.get('/', (req, res) => {
    res.send('hello wrold');
});

connection.end();





const PORT = 3000;

app.listen(process.env.PORT, () => {
    console.log('app listening at http://localhost:', process.env.PORT);

})


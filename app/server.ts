import express from "express";
import 'dotenv/config';
import bodyParser from 'body-parser';
import router from './api/routes/index';
import pool from "./config/db.connection";


const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.listen(process.env.PORT, () => {
    console.log('app listening at http://localhost:', process.env.PORT);

});

pool.getConnection((err) => {
    if (err) {
        console.log("Database Connection Failed!", err);
    } else {
        console.log("connected to Database");
    }
});

app.use(router);

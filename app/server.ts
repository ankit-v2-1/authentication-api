import express from "express";
import path from "path";
import 'dotenv/config';
import bodyParser from 'body-parser';
import router from './api/routes/index';
import pool from "./config/db.connection";
import userRoute from './views/views';

// create express app.
const app = express();
app.use(bodyParser.json());

// listen for requests at specified port.
app.listen(process.env.PORT, () => {
    console.log('app listening at http://localhost:', process.env.PORT);

});

// connect to the database
pool.getConnection((err) => {
    if (err) {
        console.log("Database Connection Failed!", err);
    } else {
        console.log("connected to Database");
    }
});



app.set('views', path.join(__dirname, 'views'));

// set the view engin to pug
app.set('view engine', 'pug');

// ADD puclic files like css js etc to the public folder.
app.use(express.static(path.join(__dirname, './public')));

// API(backend) routes imported from api/routes/index.js.
app.use('/api', router);

// User(frontend) routes imported from views/views.js.
app.use('/', userRoute);


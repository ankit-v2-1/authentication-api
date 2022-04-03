import express from "express";
import 'dotenv/config';

const app = express();




app.get('/', (req, res) => {
    res.send('hello wrold');
});




app.listen(process.env.PORT, () => {
    console.log('app listening at http://localhost:', process.env.PORT);

})


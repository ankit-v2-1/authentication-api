import mysql from 'mysql';
import 'dotenv/config';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {}
});

export default pool;
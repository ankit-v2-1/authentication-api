import pool from '../../config/db.connection';


export function createUserServie(body: any, callback: any) {

    let sql = "INSERT INTO users(name, email, password) VALUES(?,?,?)";
    let VALUES = [body.name, body.email, body.password];

    pool.query(sql, VALUES, (err: any, result: any) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });

}



export function validateUserServie(body: any, callback: any) {

    let sql = "SELECT * FROM users WHERE email = ?";
    let VALUES = [body.email];

    pool.query(sql, VALUES, (err: any, result: any) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result[0]);
        }
    });

};



import { Request, Response } from 'express';
import argon2 from 'argon2';
import { createUserServie, validateUserServie } from '../service/user.service';

export async function createUserHandler(req: Request, res: Response) {
    const body = req.body;

    if (body.password.length < 6) {
        res.status(400).json({
            sucess: 0,
            message: 'Password must be at least six characters long'
        });

        return;
    };

    body.password = await argon2.hash(body.password);


    console.log(body);

    createUserServie(body, (err: any, result: any) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    message: 'User already exists'
                })
            }
            return res.status(400).json({
                success: 0,
                message: 'Internal server error'
            })

        }

        return res.status(200).json({
            success: 1,
            message: result
        })
    });


}



export function validateUserHandler(req: Request, res: Response) {

    const body = req.body;

    validateUserServie(body, async (err: any, results: any) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Internal server error'
            })
        };

        if (results === undefined) {

            return res.status(200).json({
                success: 0,
                message: 'invalid email/password'
            });
        } else if (await argon2.verify(results.password, body.password))

            return res.status(200).json({
                success: 1,
                message: 'login success'

            }); else {

            return res.status(200).json({
                success: 0,
                message: 'invalid email/password'

            });
        }
    });

};
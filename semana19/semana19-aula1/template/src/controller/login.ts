import {Request, Response} from 'express';
import {getUserByEmail} from '../business/loginBusiness';

export default async function login(
    req: Request,
    res: Response
){
    try{
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await getUserByEmail(loginData)

        res.status(200).send({
            token
        });

    }catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}
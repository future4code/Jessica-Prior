import {Request, Response} from 'express';
import {createUserBusiness} from '../business/createUserBusiness';

export default async function createUser(
    req: Request,
    res: Response
){
    try{
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const token = await createUserBusiness(input)

        res.status(200).send({
            message: "Usuario criado com sucesso!",
            token
        });
    }catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}
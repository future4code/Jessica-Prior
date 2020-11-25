import {Request, Response} from 'express';
import {createUserBusiness} from '../business/createUserBusiness';

export default async function createUser(
    req: Request,
    res: Response
){
    try{
        const input = {
            id: req.params.id,
            token: req.headers.authorization
        }

         await deleteUser(input)

        res.status(200).send({
            message: "Usuario excluido com sucesso!",
            
        });
    }catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}
import {Request, Response} from 'express';
import {searchUserData} from "../data/searchUserData"

export const searchUserId = async (req: Request, res: Response)=>{
    try{ 
        const result = await searchUserData(req.params.id);

        if(!result){
            res.statusCode = 404
            throw new Error ("Sem resultados!")
        }
       
       res.status(200).send(result);
    }catch(error){
       res.status(400).send(error.message);
    }
 };
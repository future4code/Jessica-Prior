import {Request, Response} from 'express';

export const editUserId = async (req: Request, res: Response)=>{
    try{ 
        const {id, name, nickname} = req.body;

        if(!(id && name && nickname)){
            res.statusCode = 400
            throw new Error ("Falha ao atualizar o usuario!")
        }
       
       res.status(200).send("Usuario atualizado!");
    }catch(error){
      
       res.status(400).send(error.message);
    }
 };

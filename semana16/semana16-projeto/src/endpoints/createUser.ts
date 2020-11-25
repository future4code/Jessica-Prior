import {Request, Response} from 'express';
import {createUserData} from "../data/createUserData"

export const createUser = async (req: Request, res: Response)=>{
    try{ 
        const {name, nickname, email} = req.body;
        const user = await createUserData(name, nickname, email);

        if(!(name && nickname && email)){
            res.statusCode = 400
            throw new Error ("É necessario preencher todos os campos!")
        }
       
       res.status(200).send({chaveDoRetorno: "Usuario criado!!"});
    }catch(error){
      
       res.status(400).send(error.message);
    }
 };
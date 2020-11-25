import { Request, response, Response } from "express"
import {selectUserByEmail} from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"

export default async function login(
   req: Request,
   res: Response
) {
   try {
      
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Email invalido");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await selectUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Senha invalida");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
         token: "token gerado pelo jwt"
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  
}
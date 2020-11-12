import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import {generateId} from "../services/idGenerator";
import { AuthenticationData, getTokenData } from '../services/authenticator';


export default async function createTask(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;

      const authenticationData: AuthenticationData = getTokenData(token);

      if (
         !req.body.title ||
         !req.body.description
      ) {
         throw new Error('"title", "description" são obrigatórios')
      }

      const id: string = generateId()

      const currentDate = new Date()

      await insertRecipe(
         id,
         req.body.title,
         req.body.description,
         authenticationData.id,
         currentDate
      )

      res.status(400).send({
         message: "Receita criada com sucesso!",
         id,

      })

   } catch (error) {
      let message = error.sqlMessage || error.message


      res.status(400).send({ message })
   }
}
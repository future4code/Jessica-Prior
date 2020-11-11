import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export default async function createUser(
  req: Request,
  res: Response
) {
  try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email invalido");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha invalida");
    }

    if(!req.body.Logradouro ||
       !req.body.Numero ||
       !req.body.Bairro ||
       !req.body.Cidade ||
       !req.body.Estado
       ){
        throw new Error("Preencha todos os campos obrigatorios!");
      }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();


    await insertUser(
      id,
      userData.email,
      userData.password,
      req.body.Logradouro,
      req.body.Numero,
      req.body.Complemento,
      req.body.Bairro,
      req.body.Cidade,
      req.body.Estado
      );

    const token = generateToken({
      id,
    });

    res.status(200).send({
      message: "Usuario criado com sucesso!",
      token: "token gerado pelo jwt"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}
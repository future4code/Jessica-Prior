import { Request, Response } from 'express';
import { filterByName } from '../data/filterByName';
import { input2 } from '../types/User';

export const searchByName = async (req: Request, res: Response) => {
  try {

    const data: input2 = {
      name: (req.query.name as string).toLowerCase(),
    //   orderBy: req.query.orderBy as string,
    //   orderType: req.query.orderType as string || 'ASC',
    //   page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }

    if(!data.name) {
      throw new Error('Você deve inserir um valor para \'name\'')
    }

    // const validOrderByValues = ['name'];

    // if(!validOrderByValues.includes(data.orderBy)) {
    //   throw new Error('Os valores para "orderBy" devem ser "name"')
    // }

    // const validOrderTypeValues = ['ASC', 'DESC'];

    // if(!validOrderTypeValues.includes(data.orderType)) {
    //   throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
    // }

    const result = await filterByName(data.name)

    if(!result.length) {
      res.statusCode = 404;
      throw new Error('Nenhum usuario encontrado')
    }

    res.status(200).send(result)

  }catch(e) {
    res.status(400).send(
      {
        message: e.message 
      }
    )
  }
}
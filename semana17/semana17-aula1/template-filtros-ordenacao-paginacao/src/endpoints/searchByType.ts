import { Request, Response } from 'express';
import { input } from '../types/User';
import { filterByType } from '../data/filterByType';

export const searchByType = async (req: Request, res: Response) => {
  try {

    const data: input = {
      type: (req.query.type as string).toLowerCase(),
      // orderBy: req.query.orderBy as string,
      // orderType: req.query.orderType as string || 'ASC',
      // page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }

    if(!data.type) {
      throw new Error('Você deve inserir um valor para \'type\'')
    }

    // const validOrderByValues = ['name'];

    // if(!validOrderByValues.includes(data.orderBy)) {
    //   throw new Error('Os valores para "orderBy" devem ser "name"')
    // }

    // const validOrderTypeValues = ['ASC', 'DESC'];

    // if(!validOrderTypeValues.includes(data.orderType)) {
    //   throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
    // }

    const result = await filterByType(data.type)

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
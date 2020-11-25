import { connection } from "../connection/knex";

export default async function deleteUser(id: string): Promise<any> {
    try {

       await connection()
        .where({id})
        .from(User_Arq)
        .del()

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
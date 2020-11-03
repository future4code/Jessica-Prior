import { connection } from "..";
import { inputData, User } from "../types/User";

export const filterByType = async (data: string): Promise<User[]> => {
  try {

    // const resultPerPage: number = 5;
    // const offset: number = resultPerPage * (data.page - 1);

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE title LIKE "%${data}%"
    `)

    return result[0]

  } catch(e) {
    throw new Error(e.sqlMessage)
  }
}
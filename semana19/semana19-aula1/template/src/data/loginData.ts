import { connection } from "../connection/knex";

export default async function getUserByEmail(email: string): Promise<any> {
    try {

      const result = await connection()
        .select("*")
        .from(User_Arq)
        .where({ email });
			if(!result[0]){
				throw new Error("Usuário não encontrado");
			}
      return result[0];

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
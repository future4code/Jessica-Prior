import { connection } from ".."

const userTable = "Users";

export const selectUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTable)
     .where({ email });

   return result[0];
}
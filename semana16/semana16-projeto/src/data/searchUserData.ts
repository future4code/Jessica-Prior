import { connection } from '../index';

export const  searchUserData = async (id: string): Promise<any> => {
    try {
      const result = await connection.raw(
          `SELECT * FROM User WHERE id = "${id}"`
      )
        return result[0]
    } catch (e) {
        console.log(e)
    }
}
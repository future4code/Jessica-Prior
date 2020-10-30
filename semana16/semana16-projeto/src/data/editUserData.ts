import { connection } from '../index';

export const editUserData = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("Actor")
      .update({
        name: name,
        nickname: nickname
      })
      .where("id", id);
  };
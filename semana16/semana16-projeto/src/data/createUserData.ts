import { connection } from '../index';

export const createUserData = async (
    name: string,
    nickname: string,
    email: string

  ): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email
      })
      .into("User");
  };
import { connection } from "..";

export default async function selectUserById(
    id: string
): Promise <any> {
    const result = await connection('Users')
        .select('*')
        .where({ id })

    return result[0]
}
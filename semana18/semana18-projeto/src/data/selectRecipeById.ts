import { connection } from "..";

export default async function selectRecipeById(
    id: string
): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM recipes 
        JOIN Usuarios 
        ON user_id = Usuarios.id
        WHERE recipes.id = '${id}';
    `)

    return result[0][0]
}
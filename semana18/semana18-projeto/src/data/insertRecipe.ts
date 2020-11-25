import { connection } from "..";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    userId: string,
    createdAt: Date
) {
    await connection('recipes')
        .insert({
            id,
            title,
            description,
            createdAt,
            userId
        })
}
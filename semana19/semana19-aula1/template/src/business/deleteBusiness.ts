

export const deleteUser = async (input: {id: string, token: string}) => {

    const verifiedToken = authenticator.

    if(verifiedToken.role !== 'ADMIN'){
        throw new Error("Apenas administradores podem deletar usuarios!")
    }

    return await deleteUser(input.id)
}
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import createUser from '../data/createUserData';

export const createUserBusiness = async (input: any): Promise<any> => {

        try{

            if(!input.name || !input.email || !input.password || !input.role){
                throw new Error("Preencha todos os campos!");
            }

            if(input.email.indexOf("@") === -1){
                throw new Error("Email invalido");
            }

            if(input.password.length < 6){
                throw new Error("Senha deve conter no minimo 6 characters");
            }

            const id = idGenerator.generate();
            const hashPassword = await hashManager.hash(user.password);

            await createUser(
                id,
                input.email,
                input.name,
                hashPassword,
                input.role
            );

            const token = authenticator.generateToken({
                id,
                role: input.role
            });
            
            return token;

        }catch(error){
            throw new Error( error.message || "Ocorreu um erro ao criar o usuario.");
        }
        
    }
    
}
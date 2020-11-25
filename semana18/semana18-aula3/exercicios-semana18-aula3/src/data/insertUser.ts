import { connection } from "../index";

	const userTable = "Users";

	export default async function insertUser (
		id: string, 
		email: string, 
		password: string,
		Logradouro: string,
		Numero: number,
		Complemento: any,
		Bairro: string,
		Cidade: string,
		Estado: string
		) {
	  await connection
	    .insert({
	      id,
	      email,
		  password,
		  Logradouro,
		  Numero,
		  Complemento,
		  Bairro,
		  Cidade,
		  Estado
	    })
	    .into(userTable);
	};
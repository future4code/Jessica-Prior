## Exercicio 1

A) 

B)

```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
```

## Exercicio 2

A) será criado uma conexao com o mysql com as configurações de nome e password do mesmo e logo a baixo é feita a declaração do que será esperado de variaveis que seja passado de informações pra tabela userTableName.

B)

```
CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

C)

```
import { connection } from "../index";

	const userTable = "Users";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTable);
	};
```

## Exercicio 3

A)

B)

```
export type AuthenticationData = {
   id: string
}

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "1min"
      }
   )
}
```

## Exercicio 4

A)

```
export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
        const id = generateId();
    
      
        await insertUser(id, userData.email, userData.password);
    
        const token = generateToken({
          id,
        });
    
        res.status(200).send({
          token,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
}
```

B)

```
 if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email invalido");
    }
```

C)

```
if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha invalida");
    }
```

## Exercicio 5

A)

```
import { connection } from ".."

const userTable = "Users";

export const selectUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTable)
     .where({ email });

   return result[0];
}
```

## Exercicio 6

A)

```
export default async function login(
   req: Request,
   res: Response
) {
   try {
      
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Email invalido");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await selectUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Senha invalida");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token, message: "token gerado pelo jwt",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  
}
```

B)

```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Email invalido");
      }
```

## Exercicio 7

A) Com as string o token poderá receber variados tipos de caracteres.

B)

```
export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

## Exercicio 8

A)

```
import { connection } from "..";

export default async function selectUserById(
    id: string
): Promise <any> {
    const result = await connection('Users')
        .select('*')
        .where({ id })

    return result[0]
}
```

B)

```
export default async function getUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;

      const authenticationData = getData(token);

      const user = await selectUserById(authenticationData.id)

      res.status(200).send({
         id: user.id,
         nickname: user.nickname
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}
```



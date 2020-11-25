//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.NORMAL,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]
//Exercicio1 - A) o http para buscar os usuarios seria o GET. B) utilizando /users "no caso entidade que será alterada"
app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//Exercicio2 - A) utiliza-se o /users/:type para poder especificar o que vai ser procurado B) utiliza-se o enum para trocar o tipo no type, dando duas opcs de tipos

// app.get("/users/:type", (req: Request, res: Response): void =>{

//     try{
//         const usersByType = users.filter((user)=>user.type === req.params.type
//         )
//         res.status(200).send(usersByType);
//     }catch(error){
//         res.status(400).send({
//             message: "Error searching for users"
//         });
//     }
// });

app.get("/users/:name", (req: Request, res: Response): void =>{

    try{
        const usersByName = users.filter((user)=>user.name === req.params.name
        )
        res.status(200).send(usersByName);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});//Exercicio3 - A) utiliza o /users/:name para procurar pelo nome do usuario B)

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user: user = {
            id: id,
            name: name,
            email: email,
            age: age,
            type: type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})//Exercicio4 -A)Na verdade não muda nada, porque a resposta final é a mesma do post  B) nao, porque ele é usado apenas para alterar algum usuario já criado

app.put("/users", (req: Request, res: Response): void=>{

    try{

        const {id, name, email, type, age} = req.body;

        const userIndex = users.findIndex((u)=> u.id === id);

        if(userIndex === -1){
            throw new Error();
        }

        users[userIndex].name = name + "-ALTERADO";
        users[userIndex].email = email + "-ALTERADO";
        users[userIndex].type = type;
        users[userIndex].age = age;

        res.status(200).send({message: "User updated successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});//Exercicio5 - sulfixo adicionado usando concatenação

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  

import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express()

app.use(express.json())
app.use(cors())

type transactions = {
    value: number,
    date: number,
    description: string
}

type account = {
    name: string,
    cpf: number,
    date: number,
    balance: number
    extract: transactions[]
}

const users: account [] = [{
    name: 'jessica',
    cpf: 12345678900,
    date: 19960516,
    balance: 0,
    extract: []
},
]

const extract: transactions[] = []

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{

    try{
        const {name, cpf, date, balance, extract} = req.body;
        if (new Date().getFullYear() - (req.body.date / 10000) >= 18) {
                throw new Error("Usuário precisa ser maior de 18.")            
        } 

        const cpfIdem = users.find((item) => item.cpf === req.body.cpf)

        if(cpfIdem) {
            throw  new Error("Já existe uma conta criada com esse cpf")
        }

        const user: account = {
            name: name,
            cpf: cpf,
            date: date,
            balance: balance,
            extract: extract
        }

        users.push(user);
        res.status(200).send({message: "Usuário criado com sucesso!!"});

    }catch(error){
            res.status(400).send({
                message: (error.message)
            });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from '../controller/createUser'
import login from '../controller/login'
import deleteUSer from ''


dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})
app.put('/signup', createUser)
app.post("/login", login)
app.delete('/:id', deleteUser)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

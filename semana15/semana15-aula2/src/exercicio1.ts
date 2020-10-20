//A- Não da pra atribuir numeros nessa variavel porque ela é do tipo string, para um numero deveria ser colocado number após o ':'
const minhaString: string = 'alow'

//B- Para a variavel aceitar mais de um tipo, coloca-se este simbolo ' | ' entre os tipos declarados
const meuNumero: number | string = 'alow'

//C- Utulizando o type ao invés de const, o objeto pessoa pode ser tipado de um jeito q as variaveis aceitam somente os valores definidos pra elas
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} 

const pessoa1: pessoa = {
    nome: "jessica",
    idade: 24,
    corFavorita: "roxo"
}

//D-
const pessoa2: pessoa = {
    nome: "marcela",
    idade: 30,
    corFavorita: "arco-iris"
}

const pessoa3: pessoa = {
    nome: "matheus",
    idade: 21,
    corFavorita: "preto"
}

const pessoa4: pessoa = {
    nome: "thiago",
    idade: 27,
    corFavorita: "rosa"
}

//E-
enum cores {
    
 }
   
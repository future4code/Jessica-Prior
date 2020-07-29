/*Exercicios interpretaçao */
/*numero 1 */

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) /*false */

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) /*false */

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) /*true */

console.log("e. ", typeof resultado) /*boolean */

/*numero 2*/

let array
console.log('a. ', array) /*a. indefinido */

array = null
console.log('b. ', array) /*b. nulo */

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) /*c. 11 */

let i = 0
console.log('d. ', array[i]) /*d. mostra o numero 3 do indice 0 */

array[i + 1] = 19
console.log('e. ', array) /*e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] subistitui o segundo numero do indice por 19 */

const valor = array[i + 6]
console.log('f. ', valor) /*f. 9 mostra o numero do indice 7 */


/*Exercicios codigo */
/*numero 1 */

let idadeu
let idadeamigo

idadeu = prompt("Qual sua idade?")
idadeamigo = prompt("Qual a idade do seu melhor amigo?")
"25"
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeu > idadeamigo)
VM514: 1 Sua idade é maior do que a do seu melhor amigo ? false

        console.log("Diferença de idades", idadeu - idadeamigo)
    VM622: 1 Diferença de idades - 1

/*numero 2 */

let numero

numero = prompt("Digite um numero par")
"10"
console.log("Resto da divisao", numero % 2)
VM837: 1 Resto da divisao 0

let numero

numero = prompt("Digite um numero par")
"26"
console.log("Resto da divisao", numero % 2)
VM850: 1 Resto da divisao 0

let numero

numero = prompt("Digite um numero par")
"15"
console.log("Resto da divisao", numero % 2)

VM863: 1 Resto da divisao 1 /*resta 1, porque faz 2*7 que da 14 e menos 15 sobra 1 */

/*numero 3 */

let listaDeTarefas = []

listaDeTarefas[0] = prompt("Digite 3 tarefas que voce precisa fazer hoje")

listaDeTarefas[1] = prompt("Digite 3 tarefas que voce precisa fazer hoje")

listaDeTarefas[2] = prompt("Digite 3 tarefas que voce precisa fazer hoje")

console.log("Lista de tarefas: ", listaDeTarefas)

let remover

remover = prompt("Digite o indice de uma tarefa que voce ja fez hoje: 0, 1 ou 2")

listaDeTarefas.splice(remover, 1)
VM2363: 9 Lista de tarefas: (3) ["lavar a louça", "limpar o banheiro", "arrumar o guarda roupa"]
    ["limpar o banheiro"]
console.log("Lista de tarefas atualizada: ", listaDeTarefas)
VM2449: 1 Lista de tarefas atualizada: (2) ["lavar a louça", "arrumar o guarda roupa"]



/*numero 4 */

let nome
let email

nome = prompt("Qual seu nome?")
email = prompt("Qual seu email?")

console.log("O email " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome)
VM1565: 7 O email jsscprior @gmail.com foi cadastrado com sucesso.Seja bem - vinda(o), jessica
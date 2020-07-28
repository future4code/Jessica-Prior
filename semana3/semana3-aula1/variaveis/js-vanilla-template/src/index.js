/*exercicios interpretação*/
/*numero 1*/

/*o primeiro logo mostra o numero 10 q tem na variavel b, 
o segundo log mostra o numero da variavel a = 10 e da b = 5 pq depois foi atribuido o 5 pra variavel b*/

/*numero 2 */

/*o log mostrara o numero 10 em todas as variaveis */




/*exercicios de codigo */
/* numero 1 */

let nome
let idade

console.log(typeof(nome, idade))

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof(nome, idade))

console.log("Olá " + nome + ", Voce tem " + idade + " anos")

/*numero 2 */

let nome
let animal
let jogo
let serie
let anime

nome = prompt("Qual seu nome?")
animal = prompt("Qual o nome do seu animal de estimação?")
jogo = prompt("Qual jogo tem jogado recentemente?")
serie = prompt("Qual serie está vendo ultimamente?")
anime = prompt("Qual seu anime favorito?")

console.log("Qual o seu nome?")
console.log("Resposta: ", nome)
console.log("Qual o nome do seu animal de estimação?")
console.log("Resposta: ", animal)
console.log("Qual jogo tem jogado recentemente?")
console.log("Resposta: ", jogo)
console.log("Qual serie está vendo ultimamente?")
console.log("Resposta: ", serie)
console.log("Qual seu anime favorito?")
console.log("Resposta: ", anime)







VM917: 13 Qual o seu nome ?
    VM917 : 14 Resposta: jessica
VM917: 15 Qual o nome do seu animal de estimação ?
        VM917 : 16 Resposta: Frozen
    VM917: 17 Qual jogo tem jogado recentemente ?
    VM917 : 18 Resposta: Path of Exile(PS4)
VM917: 19 Qual serie está vendo ultimamente ?
    VM917 : 20 Resposta: its okay not be okay
VM917: 21 Qual seu anime favorito ?
    VM917 : 22 Resposta: One Piece

/*numero 3 */

const comidasFavoritas = ['strogonoff', 'pizza baiana', 'sopa de mandioca', 'batata frita', 'shawarma'];
console.log("Minhas comidas favoritas são:", comidasFavoritas);
VM1224: 2 Minhas comidas favoritas são: (5) ["strogonoff", "pizza baiana", "sopa de mandioca", "batata frita", "shawarma"]

console.log("Minhas comidas favoritas são:");
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt("Qual sua comida favorita?")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

/*numero 4 */

let perguntas = ['Voce almoçou hoje?', 'Voce dormiu de tarde?', 'Voce está com as pernas cruzadas aogra?']
let boolean = [true, false]

console.log(perguntas[0], boolean[0])
console.log(perguntas[1], boolean[0])
console.log(perguntas[2], boolean[1])
VM1881: 4 Voce almoçou hoje ? true
VM1881: 5 Voce dormiu de tarde ? true
VM1881: 6 Voce está com as pernas cruzadas aogra ? false
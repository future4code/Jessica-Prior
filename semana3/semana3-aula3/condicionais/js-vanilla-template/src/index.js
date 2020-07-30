/*Exercicios de interpretaçao aula 3 */

/*numero 1 */

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
/*A) Ele pede para digitar um numero que o usuario quer testar */
/*B) Ele imprime na tela Passou no teste com numeros pares, que dai nao sobra resto de divisao*/
/*Ele imprime na tela Nao Passou no teste com numeros impares, que dai sempre vai sobrar resto de divisao */


/*numero 2 */

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    /*A) Mostra a janela pro usuario escolher uma fruta e mostra pro usuario o valor da fruta que ele escolheu */
    /*B) O preço da fruta  Maçã  é  R$  2.25 */
    /*C) Ele mostra o valor do default e nao o preço correto da pera */

/*numero 3 */

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
    /*A) Declara uma constante numero e pede pro usuario digitar um primeiro numero */
    /*B) Com o numero 10 aparece a mensagem: Esse numero passou no teste, Com o numero -10 aparece a mensagem: Uncaught ReferenceError: mensagem is not defined
    at <anonymous>:8:13 */
    /*C) Ocorre um erro no console,  não aparece mensagem nenhuma de else, porque a variavel mensagem só existia dentro do if, fora dele nao foi declarada*/
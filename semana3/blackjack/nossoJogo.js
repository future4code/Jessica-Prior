/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */

/*Inicio */

let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let resultadoU = carta1Usuario.valor + carta2Usuario.valor

let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta()
let resultadoPc = carta1Pc.valor + carta2Pc.valor



alert("Bem vindo ao jogo BlackJack!")

if (confirm("Deseja iniciar uma nova rodada ?")) {
    // o que fazer se o usuário clicar "ok"
    console.log("Usuário - cartas: " + carta1Usuario.texto + " " + carta2Usuario.texto + " " +
        " - pontuação " + resultadoU)

    console.log("Computador - cartas: " + carta1Pc.texto + carta2Pc.texto + "- pontuação " + resultadoPc)

    if (resultadoU > resultadoPc) {
        console.log("O usuário ganhou!")
    } else
    if (resultadoU < resultadoPc) {
        console.log("O computador ganhou!")
    } else {
        console.log("Empate")
    }
} else {
    // o que fazer se o usuário clicar "cancelar"
    console.log("O jogo acabou!")
}
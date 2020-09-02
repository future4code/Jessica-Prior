/*Exercicios de interpretação */
/*numero 1 */
/*Uma função para converter o valor de dolar para real, recebe do prompt o valor da cotação do dolar, 
retorna em reais, depois pega o valor da variavel meudinheiro e faz X o 100 que foi passado no paramentro */

/*numero 2 */
/*Uma fnção para calcular o valor depositado para cada tipo de investimento que tem no switch case, 
dependendo da escolha do usuario, o case irá calcular o valor do investimento X as porcentagens de juros, 
o default serve para uma escolha invalida do usuario e apresenta um alerta com a mensagem de escolha invalida. 
Retorna o valor do investimento selecionado ja com os juros, nas chamadas de funções apresenta o tipo de investimento, a primeira de ações o resultado é 165, 
os consoles mostra o resultado dos montantes*/

/*numero 3 */
/*para cada numero do array numeros, se o numero for par, será inserido no array1, caso contrario no array2, nos consoles mostra a quantidade total de numeros 
do array numeros e a quantidade de numeros dos outros dois arrays */

/*numero 4 */
/*para cada numero do array numeros, se o numero for menor q o numero1 o numero1 recebe o numero, 
se o numero for maior que numero2 o numero2 recebe o numero, no final mostra os dois numeros recebidos nas variaveis  */


/*Exercicios de logica de programação*/
/*numero 2 */
/*A) False, B) True, C) True, D) True, E) False */

/*numero 5 */
/*I) */
const num1 = 15,
    num2 = 30

function maior() {
    if (num1 > num2) {
        console.log("O numero maior é: " + num1)
    } else {
        console.log("O numero maior é: " + num2)
    }
}

maior()
VM1123: 7 O numero maior é: 30

/*II) */
const num1 = 15,
    num2 = 30

function divisivel() {
    if (num1 % num2 === 0) {
        console.log("O numero " + num1 + "é divisivel por " + num2)
    } else {
        console.log("O numero " + num1 + " não é divisivel por " + num2)
    }
}

divisivel()
VM1527: 7 O numero 15 não é divisivel por 30
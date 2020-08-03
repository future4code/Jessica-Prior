/*Exercicos de interpretaçao aula de Funçoes */

/*numero 1 */
/*A) Será impresso no consolelog 1, o resultado 10(2x5=10) e no segundo log 50(10x5) */
/*B)Retorna somente a ultima função no console, tipo a minhafuncao(10)=50 no caso  */

/*numero 2*/
/*A)Ele mostra os dois elementos do array, pq enquanto i < 2 ele faz a função e depois mostra os dois nomes, Darvas e Goli */
/*B)Aparecerá o nome da Amanda e do Caio */

/*numero 3 */
/*Checa os numeros pares, os seleciona, multiplica por eles mesmos e colocar no novo array */



/*Exercicios de codigo */
/*numero 4 */
/*A)*/
function minhaFuncao() {
    console.log("Eu sou Jessica, tenho 24 anos, moro em Vera Cruz do Oeste, sou estudante e trabalho a noite de motoboy")
}

minhaFuncao()
VM485: 2 Eu sou Jessica, tenho 24 anos, moro em Vera Cruz do Oeste, sou estudante e trabalho a noite de motoboy

    /*B)*/



    /*numero 5*/
    /*A) */
function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(5, 16))
VM878: 5 21

/*B) */
function booleano(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}

console.log(booleano(15, 35))
VM1183: 9 false

/*C) */
function mensagem(msg) {
    for (let i = 0; i < 10; i++) {
        console.log(msg)
    }
}

alert(mensagem("Oi meu chapa!!"))
10 VM1684: 3 Oi meu chapa!!
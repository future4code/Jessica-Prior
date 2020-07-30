/*Exercicios aula 4 Laços */
/*Interpretação */

/*numero 1 */
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)
    /*Enquanto o i for menor que 5 ele vai incrementar mais um até ficar igual a 5. O resultado é 10 */

/*numero 2 */
/*A) Sera impresso os numeros 19, 21, 23, 25, 27, 30 porque o if pede um numero maior que 18 */
/*B)  */

/*desafio */
/*0
  00
  000
  0000
  3 */

/*Escrita de codigo */

/*numero 3 */

/*A) */
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let num of arrayOriginal) {
    console.log(num)
}

/*B) */
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let num of arrayOriginal) {
    console.log(num / 10)
}

/*C) */
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayNovo = []

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
        arrayNovo.push(arrayOriginal[i])
    }
}
console.log(arrayNovo)

/*D) */
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayNovo = []

for (let i = 0; i < arrayOriginal.length; i++) {
    arrayNovo.push("O n° do index " + i + " é: " + arrayOriginal[i])
}
console.log(arrayNovo)

/*E) */
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 0

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    }
}
console.log(maiorNumero) /*faltou do menor */

/*C) */
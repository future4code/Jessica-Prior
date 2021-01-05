// Exercicio 1
var reshapingWord1 = function (word1, word2) {
    if (word1 === word2) {
        return false;
    }
    // Verifica se tem mais de um caractere add na palavra
    if (Math.abs(word2.length - word1.length) > 1) {
        return false;
    }
    // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if (word1.length > word2.length)
        return word1.includes(word2);
    if (word2.length > word1.length)
        return word2.includes(word1);
    // Verificando quantos caracteres diferentes tem na palavra
    var charsDiffCount = 0;
    for (var i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i])
            charsDiffCount++;
    }
    return charsDiffCount === 1;
};
console.log(reshapingWord('naruto', 'naaruto'));
console.log(reshapingWord('naruto', 'naruto'));
console.log(reshapingWord('naruto', 'narut'));
console.log(reshapingWord('naruto', 'naruko'));

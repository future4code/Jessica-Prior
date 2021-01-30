
const findPrefix = (string:string[]) =>{

    let prefix = string[0]

    let prefixLength = prefix.length;

    for (let i=1; i<string.length && prefixLength>0; i++){

        let word = string[i]
        let matchLength = 0
        let maxMatchLength= Math.min(word.length, prefixLength);

        while (++matchLength <maxMatchLength){
            if(word.charAt(matchLength) != prefix.charAt(matchLength)){
                break;
            }
        }
        prefixLength = matchLength;
    }
    return prefix.substring(0, prefixLength);
}
console.log(findPrefix(["sushi", "subir", "submarino"]))
console.log(findPrefix(["temaki", "tema", "ter"]))
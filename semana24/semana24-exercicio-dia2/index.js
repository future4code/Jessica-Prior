exports.indexOf = void 0;
exports.indexOf = function (source, query) {
    var result = source.split("");
    var char;
    result.map(function (letter, index) {
        if (letter === query) {
            char = index;
        }
        return char;
    });
    console.log(char);
};
exports.indexOf("Hellow", "o");

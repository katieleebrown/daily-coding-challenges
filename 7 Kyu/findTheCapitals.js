// Find the Capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/

var capitals = function (word) {
    let indexes = []

    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            indexes.push(i)
        }
    }
    return indexes
};
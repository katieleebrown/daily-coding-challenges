// Consonant Value
// https://www.codewars.com/kata/59c633e7dcc4053512000073/

function solve(s) {
    let consonants = s
        .toLowerCase()
        .split(/[aeiou]/)
        .map(x => x.split('').map(x => x.charCodeAt(0) - 96).reduce((a, b) => a + b, 0))
        .sort((a, b) => a - b)

    return consonants[consonants.length - 1]
};
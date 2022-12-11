// Alternate Case
// https://www.codewars.com/kata/57a62154cf1fa5b25200031e

function alternateCase(s) {
    let original = s.split('')
    let alternate = []

    for (let i = 0; i < original.length; i++) {
        original[i] == original[i].toLowerCase() ? alternate.push(original[i].toUpperCase()) : alternate.push(original[i].toLowerCase())
    }

    return alternate.join('')
}
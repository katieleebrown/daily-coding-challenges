// Break Camel Case
// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    let letters = string.split('')

    for (let i = 1; i < letters.length; i++) {
        if (letters[i] == letters[i].toUpperCase()) {
            letters.splice(i, 0, ' ')
            i++
        }
    }

    return letters.join('')
}
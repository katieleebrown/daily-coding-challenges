// Odd Even String Sort
// https://www.codewars.com/kata/580755730b5a77650500010c/

function sortMyString(S) {
    S = S.split('')
    let evens = S.filter((x, i) => i % 2 == 0).join('')
    let odds = S.filter((x, i) => i % 2 != 0).join('')

    return `${evens} ${odds}`
}
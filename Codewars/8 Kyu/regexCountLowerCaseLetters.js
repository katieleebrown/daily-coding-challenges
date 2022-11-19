// Regex Count Lowercase Letters
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str) {
    let letters = str.split('').filter(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123)

    return letters.length
}
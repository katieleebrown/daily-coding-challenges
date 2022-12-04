// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        a = a.filter(num => num != b[i])
    }

    return a
}
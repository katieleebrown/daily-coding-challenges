// Consecutive Strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    let index = 0
    let longestLength = 0

    for (let i = 0; i < (strarr.length - (k - 1)); i++) {
        let length = 0
        for (let j = 0; j < k; j++) {
            length += strarr[i + j].length
        }
        if (length > longestLength) {
            index = i
            longestLength = length
        }
    }

    let longest = []
    for (let i = 0; i < k; i++) {
        longest.push(strarr[index + i])
    }

    return k > strarr.length ? '' : longest.join('')
}
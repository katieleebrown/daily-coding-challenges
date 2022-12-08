// Simple Consecutive Pairs
// https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
    let count = 0

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) {
            count++
        }
        i++
    }

    return count
};
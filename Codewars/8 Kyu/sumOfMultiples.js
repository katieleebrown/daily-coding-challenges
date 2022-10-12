// Sum of Multiples
// https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n, m) {
    let sum = 0

    for (let i = n; i < m; i++) {
        if (i % n == 0) {
            sum += i
        }
    }
    return sum == 0 ? 'INVALID' : sum
}
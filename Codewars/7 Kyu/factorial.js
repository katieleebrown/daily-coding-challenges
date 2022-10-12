// Factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n) {
    if (n < 0 || n > 12) {
        throw 'RangeError'
    } else if (n == 0) {
        return 1
    } else {
        let total = 1
        for (let i = 1; i <= n; i++) {
            total *= i
        }
        return total
    }
}